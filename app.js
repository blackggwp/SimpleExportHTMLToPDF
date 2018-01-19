$(document).ready(function() {
    var isExportpdf = false;

    // catch event
    $('.exportPDF').click(function(event) {
// get html from table
var tbldata = $('#tblExport').prop('outerHTML');
      exportPDFFunc(tbldata);
    });

function exportPDFFunc(tbldata) {
    isExportpdf = false;
    // console.log(tbldata);
    var send={};
    send['html']=tbldata;

    $.ajax({
                url: 'exportpdf.php',
                type:'POST',
                data:send,  success: function(returnData){
                    isExportpdf = true;
                    // console.log(returnData);
                    // redirectWindow.location.reload();
                    // window.location.reload(true);
                viewPdf(0);
                }

            });
    
}
function viewPdf(retry){

    if (retry >= 10) {
        alert('นานเกินไป กรุณาทำรายการใหม่');
        return;
    };
    setTimeout(function(){
        // alert('in settimeout'+isExportpdf);
        if (isExportpdf) {
            // var redirectWindow = window.open('export/inven.pdf','_blank', 'clearcache=yes');
            window.open('export/exportPDF.pdf','_blank');
            setTimeout(function(){
    // Delay time for create file pdf can adjust sec in 1000 = 1 sec                
            },1000);
        }else
        {
            viewPdf(retry+1);
        };
            },500);
}

});


