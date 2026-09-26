

function getUserInput(userPrompt) {
     let userInput;
     let temp;
     while (true) {
         userInput = prompt(userPrompt, "10");
         userInput = Number(userInput);
         temp = Number.isInteger(userInput) && userInput > 0;
         if (temp) {
            break;
         }
     }
     return userInput;
}

function createTable() {
     let rows = getUserInput("Please enter the number of rows");
     let cols = getUserInput("Please enter the number of columns");
     
     let html = "<center><h2 style='color: #2b5797; font-family: Arial, sans-serif; text-transform: uppercase; letter-spacing: 2px;'>Multiplication Table " + rows + " X " + cols + "</h2></center>";
     
     html = html + '<table style="margin-left: auto; margin-right: auto; width: 70%; border-collapse: collapse;">';
     
     for (var i = 0; i < rows; i++) {
          html = html + "<tr>";
          for (var j = 0; j < cols; j++) {
               html = html + '<td style="border: 1px solid #999; text-align: center; padding: 8px; background-color: #f4f9ff; font-family: Arial, sans-serif;">' + (i + 1) * (j + 1) + "</td>";
          }
          html = html + "</tr>";
     }
     html = html + "</table>";
     
     html = html + "<br><center><p style='font-family: Arial, sans-serif; color: #555;'>&copy; 2026 Mathew</p></center>";
     
     document.write(html);
}