!define APPNAME "learnLang"
!define COMPANYNAME "ikarus512"
!define DESCRIPTION "An app for learning languages/alphabets, etc."
!define VERSIONMAJOR 1
!define VERSIONMINOR 1
!define VERSIONBUILD 1
!define HELPURL "http://..." # "Support Information" link
!define UPDATEURL "http://..." # "Product Updates" link
!define ABOUTURL "http://..." # "Publisher" link
!define INSTALLSIZE 135985 # This is the size (in kB) of all the files copied into "Program Files"

RequestExecutionLevel admin # Require admin rights on NT6+ (When UAC is turned on)
InstallDir "$PROGRAMFILES\${COMPANYNAME}\${APPNAME}"
!verbose 4

LicenseData "..\..\..\LICENSE" # txt (DOS \r\n) or rtf file
Name "${COMPANYNAME} - ${APPNAME}" # Installer/uninstaller's title bar text
Icon "..\www\img\icon.ico"
OutFile "learnLang-win-ia32-debug-setup.exe" # define installer name

!include LogicLib.nsh # library from NSIS package

### Just three pages:
page license   # license agreement
page directory # install location
page instfiles # installation

!macro VerifyUserIsAdmin
UserInfo::GetAccountType
pop $0
${If} $0 != "admin" # Require admin rights on NT4+
        messageBox mb_iconstop "Administrator rights required!"
        setErrorLevel 740 # ERROR_ELEVATION_REQUIRED
        quit
${EndIf}
!macroend

function .onInit
    setShellVarContext all
    !insertmacro VerifyUserIsAdmin
functionEnd

section "install"
    setOutPath "$INSTDIR" # target install dir
    # Files added here should be removed by the uninstaller (see section "uninstall")
    file /r learnLang-win-ia32-debug\*
    file "..\www\img\icon.ico"
    #file "${APPNAME}-start.exe"

    # Uninstaller - See function un.onInit and section "uninstall" for configuration
    writeUninstaller "$INSTDIR\${APPNAME}-uninstall.exe"

    # Start Menu
    createDirectory "$SMPROGRAMS\${COMPANYNAME}\${APPNAME}"
    createShortCut "$SMPROGRAMS\${COMPANYNAME}\${APPNAME}\${APPNAME}-start.lnk" "$INSTDIR\${APPNAME}-start.exe" "." "$INSTDIR\icon.ico"
    createShortCut "$SMPROGRAMS\${COMPANYNAME}\${APPNAME}\${APPNAME}-uninstall.lnk" "$INSTDIR\${APPNAME}-uninstall.exe" "" "$INSTDIR\icon.ico"

    # Registry information for add/remove programs
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "DisplayName" "${COMPANYNAME} - ${APPNAME} - ${DESCRIPTION}"
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "UninstallString" "$\"$INSTDIR\${APPNAME}-uninstall.exe$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "QuietUninstallString" "$\"$INSTDIR\${APPNAME}-uninstall.exe$\" /S"
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "InstallLocation" "$\"$INSTDIR$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "DisplayIcon" "$\"$INSTDIR\icon.ico$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "Publisher" "$\"${COMPANYNAME}$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "HelpLink" "$\"${HELPURL}$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "URLUpdateInfo" "$\"${UPDATEURL}$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "URLInfoAbout" "$\"${ABOUTURL}$\""
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "DisplayVersion" "$\"${VERSIONMAJOR}.${VERSIONMINOR}.${VERSIONBUILD}$\""
    WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "VersionMajor" ${VERSIONMAJOR}
    WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "VersionMinor" ${VERSIONMINOR}
    # There is no option for modifying or repairing the install
    WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "NoModify" 1
    WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "NoRepair" 1
    # Set the INSTALLSIZE constant (!defined at the top of this script) so Add/Remove Programs can accurately report the size
    WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}" "EstimatedSize" ${INSTALLSIZE}
sectionEnd

# Uninstaller

function un.onInit
    SetShellVarContext all

    #Verify the uninstaller - last chance to back out
    MessageBox MB_OKCANCEL "Permanantly remove ${APPNAME}?" IDOK next
        Abort
    next:
    !insertmacro VerifyUserIsAdmin
functionEnd

section "uninstall"
    # Remove Start Menu launcher
    delete "$SMPROGRAMS\${COMPANYNAME}\${APPNAME}\${APPNAME}-start.lnk"
    delete "$SMPROGRAMS\${COMPANYNAME}\${APPNAME}\${APPNAME}-uninstall.lnk"
    # Try to remove the Start Menu folder - this will only happen if it is empty
    rmDir "$SMPROGRAMS\${COMPANYNAME}\${APPNAME}"
    rmDir "$SMPROGRAMS\${COMPANYNAME}" #remove if empty

    # Remove files
    delete  "$INSTDIR\${APPNAME}-start.exe"
    delete  "$INSTDIR\icon.ico"
    delete  "$INSTDIR\${APPNAME}-uninstall.exe"
    delete  "$INSTDIR\*" ### dangerous!.. (better to remove file-by-file)
    rmDir /r $INSTDIR\locales
    rmDir /r $INSTDIR\swiftshader
    rmDir /r $INSTDIR\www
    rmDir    $INSTDIR ## remove if empty

    # Remove uninstaller information from the registry
    DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${COMPANYNAME} ${APPNAME}"
sectionEnd
