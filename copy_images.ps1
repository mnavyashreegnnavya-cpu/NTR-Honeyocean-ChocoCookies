$srcDir = "C:\Users\navya shree g n\.gemini\antigravity-ide\brain\5693cba1-f27a-4661-9ff6-de583c852c58"
$destDir = "f:\NTR Honey ocean Chacos and Cookies\images"

$files = @{
    "hero_background_1780834304457.png" = "hero-bg.png"
    "honey_truffles_1780834321852.png" = "truffles.png"
    "chocolate_cookies_1780834343224.png" = "cookies.png"
    "gift_assortment_1780834358476.png" = "gift-box.png"
    "artisan_story_1780834373920.png" = "craft-story.png"
}

foreach ($src in $files.Keys) {
    $dest = $files[$src]
    $srcPath = Join-Path $srcDir $src
    $destPath = Join-Path $destDir $dest
    
    if (Test-Path $srcPath) {
        Write-Host "Unblocking and clearing attributes for $srcPath"
        Unblock-File -LiteralPath $srcPath -ErrorAction SilentlyContinue
        Set-ItemProperty -LiteralPath $srcPath -Name Attributes -Value Normal -ErrorAction SilentlyContinue
        
        Write-Host "Copying to $destPath"
        [System.IO.File]::Copy($srcPath, $destPath, $true)
    } else {
        Write-Host "File not found: $srcPath"
    }
}
