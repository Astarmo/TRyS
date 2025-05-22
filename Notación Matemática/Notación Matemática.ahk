#Requires AutoHotkey v2.0

#SingleInstance Force

filePath := A_ScriptDir "\atajos.txt"
if !FileExist(filePath) {
    MsgBox "File not found: " filePath
    return
}

; Configura el menú de la bandeja
A_TrayMenu.Delete()
A_TrayMenu.Add("Abrir Menú", (*) => make_gui(filePath))
A_TrayMenu.Add("Salir", (*) => ExitApp())

if (A_Args.Length = 0 || A_Args[1] != "auto")
    make_gui(filePath) ; Si no se pasa el argumento "auto", muestra el menú 
enableHotstringsFromFile(filePath)


enableHotstringsFromFile(filePath) {
    if !FileExist(filePath) {
        MsgBox "File not found: " filePath
        return
    }

    file := FileOpen(filePath, "r", "UTF-8-RAW")
    lines := StrSplit(FileRead(filePath, "UTF-8-RAW"), "`n", "`r")
    file.Close()

    for line in lines {
        line := Trim(line)

        if (InStr(line, ":") = 0 || InStr(line, "→") = 0) {
            continue
        }

        state := Trim(StrSplit(line, ":", , 2)[1])
        hsPair := Trim(StrSplit(line, ":", , 2)[2])
        
        hsPair := StrSplit(hsPair, "→", , 2)
        hotstring1 := Trim(hsPair[1])
        hotstring2 := Trim(hsPair[2])

        Hotstring(":*?c:" hotstring1, hotstring2, state)
    }
}

make_gui(filePath) {
    height := 600

    goo := Gui("+Resize", "h" height)
    goo.BackColor := 0xE0E0E0
    goo.Title := "Notación Matemática"
    goo.separacionEntreColumnas := goo.separacionEntreCheckboxes := 0
    separacionEntreColumnas := 20
    separacionEntreCheckboxes := 20
    goo.OnEvent("Size", GuiSize)

    if !FileExist(filePath) {
        MsgBox "File not found: " filePath
        return
    }

    file := FileOpen(filePath, "r", "UTF-8-RAW")
    fileText := StrReplace(FileRead(filePath, "UTF-8-RAW"), "`r")
    file.Close()
    categories := StrSplit(fileText, "`n`n")

    checkBoxes := []
    activeHotstrings := Map()

    for mainIndex, category in categories {
        lines := StrSplit(category, "`n")

        ; Main checkbox (sin indentación) 
        goo.SetFont('s10 bold cBlack', 'Segoe UI Symbol')
        mainCbText := SubStr(lines[1], 2, -1)
        mainCb := goo.AddCheckbox(, StrReplace(mainCbText, "&", "&&"))
        mainCb.Value := 1

        checkBoxes.Push([mainCb, []])
        lines.RemoveAt(1)

        for subIndex, line in lines {
            line := Trim(line)
            if (line = "" || InStr(line, ":") = 0 || InStr(line, "→") = 0) {
                continue
            }

            ; Sub checkbox con indentación horizontal (15 px aprox)
            goo.SetFont('s10 norm cBlack', 'Segoe UI Symbol')
            subCbText := Trim(StrSplit(line, ":", , 2)[2])
            subCbValue := Trim(StrSplit(line, ":", , 2)[1])
            subCb := goo.AddCheckbox(, StrReplace(subCbText, "&", "&&"))
            subCb.Value := subCbValue
            if subCb.Value {
                hotstring := Trim(StrSplit(subCb.Text, "→", , 2)[1])
                activeHotstrings[hotstring] := [mainIndex, subIndex]
            }            

            mainCb.Value &= subCb.Value
            checkBoxes[-1][2].Push(subCb)

            clickSubCbEnv(checkBoxes, mainIndex, subIndex, activeHotstrings, filePath)
        }

        clickMainCbEnv(checkBoxes, mainIndex, activeHotstrings, filePath)
    }

    autoStartCb := goo.AddCheckbox(, "Iniciar automáticamente al iniciar el sistema")
    autoStartCb.Value := isAutoStartEnabled()
    autoStartCb.OnEvent("Click", (*) => toggleAutoStart(autoStartCb.Value))

    goo.Show()

    return

    isAutoStartEnabled() {
        startupLnk := A_Startup "\Notación Matemática.lnk"
        return FileExist(startupLnk) != "" ? 1 : 0
    }

    toggleAutoStart(enable) {
        startupLnk := A_Startup "\Notación Matemática.lnk"
        scriptPath := A_ScriptFullPath
        if enable {
            ; Crea el acceso directo en la carpeta de inicio
            FileCreateShortcut(scriptPath, startupLnk, , "auto")
        } else if FileExist(startupLnk) {
            ; Elimina el acceso directo de la carpeta de inicio
            FileDelete(startupLnk)
        }
    }

    GuiSize(guiObj, MinMax, Width, Height) {
        ; Reorganiza todas las checkboxes en función del nuevo height
        separacionEntreColumnas := 15
        sangria := 15
        separacionEntreCheckboxes := 5
        separacionEntreCategorias := 15
        
        left0 := separacionEntreColumnas
        up0 := separacionEntreCheckboxes

        left := left0
        up := up0
        right := left
        down := up
        for mainIndex, _ in checkBoxes {
            mainCb := checkBoxes[mainIndex][1]
            mainCb.GetPos(, , &w, &h)
            down := up + h
            if (down > height) {
                left := right + separacionEntreColumnas
                up := up0
                right := left
                down := up + h
            }
            right := Max(right, left + w) ; Actualiza right si es necesario
            mainCb.Move(left, up)
            mainCb.Opt("+Redraw")
            up := down ; Reiniciar la posición up para la siguiente sección
            up += separacionEntreCheckboxes   ; Baja la altura superior en separacionEntreCheckboxes


            left += sangria
            for subCb in checkBoxes[mainIndex][2] {
                ; Sub checkbox con indentación horizontal (15 px aprox)
                subCb.GetPos(, , &w, &h)
                down := up + h
                if (down > height) {
                    left := right + separacionEntreColumnas + sangria
                    up := up0
                    right := left
                    down := up + h
                }
                right := Max(right, left + w) ; Actualiza right si es necesario
                subCb.Move(left, up)
                subCb.Opt("+Redraw")
                up := down ; Reiniciar la posición up para la siguiente sección
                up += separacionEntreCheckboxes
            }
            left -= sangria ; Reiniciar la posición left para la siguiente sección
            if (up != up0) {
                up += separacionEntreCategorias ; Añadir un margen vertical entre secciones
                ;lineHorizontal := goo.AddText('x' left ' y' (up + down)/2 ' w' (right - left) ' h1 BackgroundGray')
            }
        }
        autoStartCb.GetPos(, , &w, &h)
        down := up + h
        if (down > height) {
            left := right + separacionEntreColumnas
            up := up0
            right := left
            down := up + h
        }
        right := Max(right, left + w) ; Actualiza right si es necesario
        up := Height - h - separacionEntreCheckboxes
        autoStartCb.Move(left, up)
        autoStartCb.Opt("+Redraw")

        guiObj.Move(, , right + separacionEntreColumnas, )
    }

    save(checkBoxes, filePath) {
        output := ""
        for main in checkBoxes {
            mainCb := main[1]
            output .= "[" StrReplace(mainCb.Text, "&&", "&") "]`n"
            for subCb in main[2] {
                output .= (subCb.Value ? "1" : "0") ": " StrReplace(subCb.Text, "&&", "&") "`n"
            }
            output .= "`n"
        }
        if (StrLen(output) > 0)
            output := SubStr(output, 1, -2)
        file := FileOpen(filePath, "w", "UTF-8-RAW")
        FileDelete(filePath) ; Ensure the file is cleared before writing
        FileAppend(output, filePath, "UTF-8-RAW")
        file.Close()

        enableHotstringsFromFile(filePath) ; Update the hotstrings after saving
    }

    clickMainCbEnv(checkBoxes, mainIndex, activeHotstrings, filePath) {
        mainCb := checkBoxes[mainIndex][1]
        mainCb.OnEvent('Click', (*) => clickMainCb(checkBoxes, mainIndex, filePath))

        clickMainCb(checkBoxes, mainIndex, filePath) {
            for subIndex, subCb in checkBoxes[mainIndex][2] {
                if (subCb.Value != checkBoxes[mainIndex][1].Value) {
                    subCb.Value := checkBoxes[mainIndex][1].Value ; Set the value of the subcheckbox
                    clickSubCb(checkBoxes, mainIndex, subIndex, activeHotstrings, filePath, true) ; Call the clickSubCb function
                }
            }
            save(checkBoxes, filePath) ; Save the state after clicking
        }
    }
    
    clickSubCb(checkBoxes, mainIndex, subIndex, activeHotstrings, filePath, calledFromMain := false) {
        subCb := checkBoxes[mainIndex][2][subIndex]
        ; Get the hotstring from the sub-checkbox text (after the arrow)
        hotstring1 := Trim(StrSplit(subCb.Text, "→", , 2)[1])
        hotstring2 := Trim(StrSplit(subCb.Text, "→", , 2)[2])
        if subCb.Value {
            if (activeHotstrings.Has(hotstring1) && activeHotstrings[hotstring1][3] != hotstring2) { ; Check if the hotstring already exists
                optionSelected := MsgBox("Ya existe un símbolo asociado a `"" hotstring1 "`".`n`n¿Deseas reemplazarlo?", , "Y/N")
                if (optionSelected = "Yes") {
                    prevCb := checkBoxes[activeHotstrings[hotstring1][1]][2][activeHotstrings[hotstring1][2]]
                    prevCb.Value := 0 ; Uncheck the previous checkbox
                    activeHotstrings[hotstring1] := [mainIndex, subIndex, hotstring2]
                } else {
                    subCb.Value := 0 ; Uncheck the checkbox
                    return
                }
            }
            else {
                activeHotstrings[hotstring1] := [mainIndex, subIndex, hotstring2]
            }
        } else {
            activeHotstrings.Delete(hotstring1)
        }

        if (!calledFromMain) {
            ;corrects the value of the main checkbox
            mainCb := checkBoxes[mainIndex][1]
            mainCb.Value := 1
            for subCb in checkBoxes[mainIndex][2] {
                mainCb.Value &= subCb.Value ; Combine the values of the main and sub checkboxes
            }

            ; Save the state after clicking
            save(checkBoxes, filePath)
        }
    }

    clickSubCbEnv(checkBoxes, mainIndex, subIndex, activeHotstrings, filePath) {
        subCb := checkBoxes[mainIndex][2][subIndex]
        subCb.OnEvent('Click', (*) => clickSubCb(checkBoxes, mainIndex, subIndex, activeHotstrings, filePath))
    }
}