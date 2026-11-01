$ErrorActionPreference = 'Stop'
$taskRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$taskArchive = [IO.Path]::GetFullPath((Join-Path $taskRoot 'archive/legacy-brainpuzzle'))
$taskBoundary = $taskRoot.TrimEnd('\') + '\'
if (-not $taskArchive.StartsWith($taskBoundary, [StringComparison]::OrdinalIgnoreCase)) { throw 'Archive target is outside the workspace.' }
if (Test-Path -LiteralPath (Join-Path $taskArchive 'manifest.json')) { throw 'Legacy archive already exists; refusing to overwrite its evidence.' }

$taskRelativePaths = [Collections.Generic.List[string]]::new()
Get-ChildItem -LiteralPath (Join-Path $taskRoot 'assets') -Directory | Where-Object { $_.Name -match '^Level_\d+$' -or $_.Name -eq 'RecoveryBuiltins' } | ForEach-Object {
    $taskRelativePaths.Add('assets/' + $_.Name)
    $taskRelativePaths.Add('assets/' + $_.Name + '.meta')
}
foreach ($taskName in @('audio','configs','fonts','imgs','levels','prefabs','spine')) {
    $taskRelativePaths.Add('assets/resources/' + $taskName)
    $taskRelativePaths.Add('assets/resources/' + $taskName + '.meta')
}
Get-ChildItem -LiteralPath (Join-Path $taskRoot 'assets/scripts') -File | Where-Object {
    $_.Name -notin @('game-storage.ts','game-storage.ts.meta') -and -not ($_.Extension -eq '.meta' -and (Test-Path -LiteralPath ($_.FullName -replace '\.meta$','') -PathType Container))
} | ForEach-Object {
    $taskRelativePaths.Add('assets/scripts/' + $_.Name)
}
foreach ($taskPath in @('docs/source-assets.json','docs/迁移验收.md','docs/validation','tools/validate-migration.cjs','tools/test-brainpuzzle-runtime.cjs','tools/main-ui-1','tools/main-ui-2','tools/sing-in-ui-1')) {
    if (Test-Path -LiteralPath (Join-Path $taskRoot $taskPath)) { $taskRelativePaths.Add($taskPath) }
}

# 先核对全部最终绝对路径，再在同一个 PowerShell 中完成移动。
$taskMoves = foreach ($taskRelative in $taskRelativePaths) {
    $taskFrom = [IO.Path]::GetFullPath((Join-Path $taskRoot $taskRelative))
    $taskTo = [IO.Path]::GetFullPath((Join-Path $taskArchive $taskRelative))
    if (-not $taskFrom.StartsWith($taskBoundary, [StringComparison]::OrdinalIgnoreCase) -or -not $taskTo.StartsWith($taskArchive + '\', [StringComparison]::OrdinalIgnoreCase)) { throw 'Unsafe archive move target.' }
    if (-not (Test-Path -LiteralPath $taskFrom)) { throw ('Missing archive source: ' + $taskRelative) }
    if (Test-Path -LiteralPath $taskTo) { throw ('Archive destination already exists: ' + $taskRelative) }
    [pscustomobject]@{ source=$taskFrom; destination=$taskTo; relative=$taskRelative }
}
New-Item -ItemType Directory -Force -Path $taskArchive | Out-Null
$taskRecords = [Collections.Generic.List[object]]::new()
foreach ($taskMove in $taskMoves) {
    $taskItem = Get-Item -LiteralPath $taskMove.source
    $taskFiles = if ($taskItem.PSIsContainer) { Get-ChildItem -LiteralPath $taskMove.source -File -Recurse } else { @($taskItem) }
    foreach ($taskFile in $taskFiles) {
        $taskOriginal = $taskFile.FullName.Substring($taskRoot.Length + 1).Replace('\','/')
        $taskRecords.Add([pscustomobject]@{ originalPath=$taskOriginal; archivedPath=$taskOriginal; bytes=$taskFile.Length; sha256=(Get-FileHash -Algorithm SHA256 -LiteralPath $taskFile.FullName).Hash.ToLowerInvariant() })
    }
}
$taskCopies = @('AGENTS.md','assets/scenes/Boot.scene','assets/scenes/Home.scene','assets/scenes/Game.scene','assets/scenes/Boot.scene.meta','assets/scenes/Home.scene.meta','assets/scenes/Game.scene.meta','assets/scripts/scenes/GameSceneController.ts','assets/scripts/scenes/HomeSceneController.ts','assets/scripts/game-storage.ts','assets/scripts/game-storage.ts.meta','assets/scripts/features/brainpuzzle/BrainPuzzleRuntime.ts','assets/scripts/features/brainpuzzle/BrainPuzzleRuntime.ts.meta','assets/resources/config/network-config.json','assets/resources/config/network-config.json.meta','build-configs/web-desktop.json','settings/v2/packages/project.json')
foreach ($taskCopy in $taskCopies) {
    $taskCopyTo = Join-Path $taskArchive ('integration-snapshot/' + $taskCopy)
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $taskCopyTo) | Out-Null
    Copy-Item -LiteralPath (Join-Path $taskRoot $taskCopy) -Destination $taskCopyTo
}
foreach ($taskMove in $taskMoves) {
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $taskMove.destination) | Out-Null
    Move-Item -LiteralPath $taskMove.source -Destination $taskMove.destination
}
@{ version=1; description='原版87关及其专属资源、配置、脚本的只归档副本，不在Creator assets扫描范围内。'; files=$taskRecords; sharedSnapshots=$taskCopies } |
    ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 -LiteralPath (Join-Path $taskArchive 'manifest.json')
Write-Output ('Archived ' + $taskRecords.Count + ' original files outside assets: ' + $taskArchive)
