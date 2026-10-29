"""Package only the portable UI module and verify every archived byte."""
import json
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parents[2]
MODULE = ROOT / "assets/resources/sing-in-ui-1"
OUT = ROOT / "deliverables/SingInUI1"


def main():
    files = sorted(path for path in MODULE.rglob("*") if path.is_file())
    files.append(MODULE.with_suffix(".meta"))
    for path in MODULE.rglob("*"):
        if not path.name.endswith(".meta"):
            assert Path(str(path) + ".meta").is_file(), f"Missing Creator metadata: {path}"
    assert files[-1].is_file(), "Import the module folder in Creator before packaging"
    archive = OUT / "SingInUI1-portable.zip"
    with ZipFile(archive, "w", compression=ZIP_DEFLATED) as package:
        for path in files:
            package.write(path, path.relative_to(ROOT).as_posix())
    with ZipFile(archive) as package:
        assert package.testzip() is None
        assert len(package.namelist()) == len(files)
        for path in files:
            assert package.read(path.relative_to(ROOT).as_posix()) == path.read_bytes()
    result = {"file": archive.relative_to(ROOT).as_posix(), "files": len(files),
              "bytes": archive.stat().st_size, "byte_verified": True,
              "scope": "Only assets/resources/sing-in-ui-1/ and its sibling .meta"}
    (OUT / "package-verification.json").write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(result))


if __name__ == "__main__":
    main()
