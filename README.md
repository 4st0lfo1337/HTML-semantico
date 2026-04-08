Invoke-WebRequest -Uri "https://github.com/microsoft/winget-cli/releases/latest/download/Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle" -OutFile "$env:USERPROFILE\Downloads\winget.msixbundle"
Add-AppxPackage "$env:USERPROFILE\Downloads\winget.msixbundle"
