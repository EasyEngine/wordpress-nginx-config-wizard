$(document).ready(function () {
    $("form :input").change(function () {

        $.get('wp.conf.html', function (template, data) {
                var data = $('#wizard').serializeJSON();

                var rendered = Mustache.render(template, data);

                $('#target').html(Prism.highlight(rendered, Prism.languages.nginx));

            } //end of callback function
        ); //end of $.get
    });
});
