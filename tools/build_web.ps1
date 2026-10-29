param([string]$Creator = $env:COCOS_CREATOR_EXE)
$ErrorActionPreference = 'Stop'
$taskRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
if (-not $Creator) {
    $Creator = @('C:/ProgramData/cocos/editors/Creator/3.8.7/CocosCreator.exe', 'E:/CocosEditer/Creator/3.8.7/CocosCreator.exe') |
        Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
}
if (-not $Creator) { throw 'Set COCOS_CREATOR_EXE to the Cocos Creator 3.8.7 executable.' }
$taskBuild = Join-Path $taskRoot 'build'
New-Item -ItemType Directory -Force -Path $taskBuild | Out-Null
$taskConfig = Join-Path $taskRoot 'build-configs/web-desktop.json'
$taskProcess = Start-Process -FilePath $Creator -ArgumentList @('--project', ('"' + $taskRoot + '"'), '--build', ('"configPath=' + $taskConfig + '"')) -WindowStyle Hidden -PassThru -RedirectStandardOutput (Join-Path $taskBuild 'web-build.stdout.log') -RedirectStandardError (Join-Path $taskBuild 'web-build.stderr.log')
$null = $taskProcess.Handle
$taskProcess.WaitForExit()
$taskProcess.Refresh()
if ($taskProcess.ExitCode -notin @(0, 36)) { throw "Cocos build failed: $($taskProcess.ExitCode). See build/web-build.*.log." }
if (Select-String -LiteralPath (Join-Path $taskBuild 'web-build.stdout.log'), (Join-Path $taskBuild 'web-build.stderr.log') -Pattern 'Missing class:|Script compilation failed|Failed to deserialize' -Quiet) { throw 'Build contains script binding or compilation errors. See build/web-build.*.log.' }
if (-not (Test-Path -LiteralPath (Join-Path $taskBuild 'web-desktop/index.html'))) { throw 'Build output index.html is missing.' }
Write-Output 'Web Desktop build completed: build/web-desktop'
