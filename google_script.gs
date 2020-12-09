let form = FormApp.openById('{google form ID}');

// get url data from google sheet
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('{google sheet name}');
let range = ss.getDataRange();
let data = range.getValues()

data.forEach(function(el){

    // data
    let qu = el[4];                       //url from col [4]

    // create each question               //add url as new question
    let item = form.addTextItem();
    item.setTitle(qu);

  })