$("[data-toggle='tab']").click(function () {
    let tabs = $(this).attr('data-tabs');
    let tab = $(this).attr("data-tab");
    $(tabs).find(".gtab").removeClass("active");
    $(tabs).find(tab).addClass("active");
});