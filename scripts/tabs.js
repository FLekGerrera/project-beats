const findBlockByAlias = alias => {
    return $(".reviews__dispaly-inner").filter((ndx, item) => {
        return $(item).attr("data-switcher-with") == alias;
    })
}

$(".reviews__switcher-item").on('click', e => {
    e.preventDefault();

    console.log(e.currentTarget)

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews__switcher-item");
    
    itemToShow.addClass("reviews__dispaly-inner--active").siblings().removeClass("reviews__dispaly-inner--active");
    curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
});