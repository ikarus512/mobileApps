@echo off
rem Create NSIS installation
rem http://nsis.sourceforge.net/Docs
set PATH=%CD%\..\node_modules\.bin;%PATH%
set PATH="C:\Program Files (x86)\NSIS";%PATH%
del /Q /F learnLang-win32-setup.exe
call makensis-cli compile ./create-installer-win32-nsis-nwjs.nsi >create-installer-win32-nsis-nwjs.out.log 2>&1
