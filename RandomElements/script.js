$("#Pops").popover({
    html: true,
    content: function () {
        return $('#popover-content').html();
    }
});