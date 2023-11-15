function generateHTML() {
    var id = document.getElementById('id').value;
    var fullName = document.getElementById('fullName').value;
    var position = document.getElementById('position').value;
    var email = document.getElementById('email').value;
    var extension = document.getElementById('extension').value;

    var htmlCode = '<tr>\
<td width="200"><a href="https://intranet.servel.cl/wp-content/uploads/2022/06/' + id + '.jpg"><img class="alignnone size-full wp-image-15227" src="https://intranet.servel.cl/wp-content/uploads/2022/06/' + id + '.jpg" alt="" width="200" height="267"></a></td>\
<td>' + fullName + '<br>' + position + '<br><a href="mailto:' + email + '">' + email + '</a><br>Anexo: ' + extension + '</td>\
</tr>';

    document.getElementById('generatedHtml').textContent = htmlCode;
}
