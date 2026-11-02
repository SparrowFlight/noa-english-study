$ErrorActionPreference = "Stop"
$port = 8766
$appRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $appRoot
$cacheBuster = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
$appUrl = "http://localhost:$port/index.html?v=15&run=$cacheBuster"

$lanIp = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
  Where-Object {
    $_.IPAddress -notlike "127.*" -and
    $_.IPAddress -notlike "169.254.*" -and
    $_.PrefixOrigin -ne "WellKnown"
  } |
  Sort-Object InterfaceMetric |
  Select-Object -First 1 -ExpandProperty IPAddress

Write-Host ""
Write-Host "NOA English Study is starting." -ForegroundColor Green
Write-Host "Computer: $appUrl"
if ($lanIp) {
  Write-Host "iPhone:   http://${lanIp}:$port/index.html?v=15"
} else {
  Write-Host "iPhone:   No LAN address found. Check the Wi-Fi connection."
}
Write-Host ""
Write-Host "Keep this window open. Press Ctrl+C to stop the server." -ForegroundColor Yellow
Write-Host ""

Start-Process $appUrl
python -m http.server $port --bind 0.0.0.0
