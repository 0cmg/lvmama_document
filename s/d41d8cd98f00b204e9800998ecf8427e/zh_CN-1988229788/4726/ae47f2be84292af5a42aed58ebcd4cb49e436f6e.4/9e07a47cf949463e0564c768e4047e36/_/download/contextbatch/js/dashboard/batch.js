try {
/* module-key = 'confluence.extra.jira:blueprint-selector', location = 'templates/extra/jira/blueprint-selector.js' */
(function(){if(!Confluence.Blueprint.Selector){return}Confluence.Blueprint.Selector.registerSelector(function(a){if(a.issueKey&&a.agileMode==="plan"){return"com.atlassian.confluence.plugins.confluence-software-blueprints:requirements-item"}if(a.sprintId&&a.agileMode==="plan"){return"com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-item"}if(a.sprintId&&a.agileMode==="report"){return"com.atlassian.confluence.plugins.confluence-software-blueprints:retrospectives-item"}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.getting-started:getting-started-resources', location = 'com/atlassian/confluence/plugins/gettingstarted/soy/getting-started.soy' */
// This file was automatically generated from getting-started.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.GettingStarted == 'undefined') { Confluence.Templates.GettingStarted = {}; }


Confluence.Templates.GettingStarted.popularTabEmpty = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="gettingstarted"><div class="main-banner">', "\u6b22\u8fce\uff0c\u770b\u8d77\u6765\u60a8\u662f\u65b0\u6765\u7684", '</div><div class="sub-banner">', soy.$$escapeHtml("\u4e0b\u65b9\u67e5\u770b\u7b80\u660e\u6559\u5b66\u6216\u4ece\u5de6\u4fa7\u5f00\u59cb\u3002"), '</div><div class="movie-container"><div class="movie-container-inner"><a href="', soy.$$escapeHtml("http://www.atlassian.com/software/confluence/videos/54.html"), '" class="movie-link"><span class="play" class="light"></span></a></div></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.getting-started:getting-started-resources', location = 'com/atlassian/confluence/plugins/gettingstarted/js/getting-started.js' */
AJS.toInit(function ($) {

    function showWelcomeVideo($container) {
        $container.html(Confluence.Templates.GettingStarted.popularTabEmpty());

        var darken = function(e){
            $('.gettingstarted .play').removeClass('light').addClass('dark');
        };
        var lighten = function(e){
            $('.gettingstarted .play').removeClass('dark').addClass('light');
        };
        $('.gettingstarted .movie-link')
            .hover(darken, lighten)
            .fancybox({
                type: 'iframe',
                width: 560,
                height: 315,
                padding: 0,
                scrolling: 'no'
            });
    }

    // This event is fired by the Confluence Dashboard Macros plugin when the popular tab is otherwise empty
    AJS.bind("dashboard-recentupdates-popular.no-updates", function (event, data) {
        showWelcomeVideo(data.container);
    });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml("/confluence"), '/display/~', soy.$$escapeUri(opt_data.username));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.logo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) {
    output.append('<a ', (opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '', ' href="', soy.$$escapeHtml("/confluence"), '/users/editmyprofilepicture.action" title="', soy.$$escapeHtml("\u6dfb\u52a0\u5934\u50cf"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/confluence/s/zh_CN-1988229788/4726/ae47f2be84292af5a42aed58ebcd4cb49e436f6e.4/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("\u7528\u6237\u56fe\u6807"), ': ', soy.$$escapeHtml("\u6dfb\u52a0\u5934\u50cf"), '"></a>');
  } else {
    if (opt_data.profilePictureInfo.anonymous) {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/confluence/s/zh_CN-1988229788/4726/ae47f2be84292af5a42aed58ebcd4cb49e436f6e.4/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("\u7528\u6237\u56fe\u6807"), ': ', soy.$$escapeHtml("\u533f\u540d"), '" title="', soy.$$escapeHtml("\u533f\u540d"), '">');
    } else if (opt_data.canView) {
      output.append('<a ', (! opt_data.disableUserHover) ? 'class="userLogoLink"' : '', ' data-username="', soy.$$escapeHtml(opt_data.username), '" href="');
      Confluence.Templates.User.userLinkUrl(opt_data, output);
      output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml("/confluence"), soy.$$escapeHtml(opt_data.profilePictureInfo.downloadPath), '" alt="', soy.$$escapeHtml("\u7528\u6237\u56fe\u6807"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '"></a>');
    } else {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/confluence/s/zh_CN-1988229788/4726/ae47f2be84292af5a42aed58ebcd4cb49e436f6e.4/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("\u7528\u6237\u56fe\u6807"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '">');
    }
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.username && opt_data.username != '') {
    output.append('<a href="');
    Confluence.Templates.User.userLinkUrl(opt_data, output);
    output.append('"', (opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"', '>', (opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username), '</a>');
  } else {
    output.append(soy.$$escapeHtml("\u533f\u540d\u7528\u6237"));
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml("\u533f\u540d\u7528\u6237"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml("\u533f\u540d\u7528\u6237"));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("\u56de\u6eaf") + '">' + soy.$$escapeHtml("\u56de\u6eaf") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.dashboard:dashboard-macros-resources', location = 'com/atlassian/confluence/plugins/macros/dashboard/js/dashboard-macros.js' */
/*
 This js file handles all the JavaScript for the dashboard macros
*/
AJS.toInit(function($) {

    var waiting = []; // used to prevent the user from triggering off another labelling operation when one is in progress
    var contextPath = AJS.Meta.get("context-path");
    var baseUrl = Confluence.getBaseUrl();

    // Space List Macro JS:

    /**
     * Check whether a space is favourited given the favourite icon for that space
     * @param button the space's favourite icon (jQuery object)
     */
    var spaceIsFavourited = function(button) {
        return button.hasClass("icon-remove-fav"); // Anchor version
    };

    /**
     * Add/Remove a space from the user's favourites. This is used when displaying spaces on the dashboard (in dash macros).
     * @param spaceKey - The space key of the space to add as favourite
     * @param button - The button that was clicked (anchor element jQuery object)
     */
    var toggleFavouriteSpace = function(spaceKey, button) {
        var wasFavourited = spaceIsFavourited(button),
            waitIndicator = button.parent().find(".icon-wait");
        var url = contextPath + "/json/" +
            (wasFavourited ? "removespacefromfavourites.action" : "addspacetofavourites.action");

        button.addClass("hidden");
        waitIndicator.removeClass("hidden");

        AJS.safe.ajax({
            url: url,
            type: "POST",
            data: { "key" : spaceKey },
            success: function(labelsArr) {
                AJS.log(labelsArr);
                waitIndicator.addClass("hidden");
                button.parent().find(wasFavourited? ".icon-add-fav" : ".icon-remove-fav").removeClass("hidden");
                delete waiting[spaceKey];
            },
            error: function(xhr, text, error) {
                // TODO CONF-20780 Notify the user of the problem (will need to be internationalised)
                waitIndicator.addClass("hidden");
                button.parent().find(wasFavourited? ".icon-remove-fav" : ".icon-add-fav").removeClass("hidden");
                AJS.log("Error Toggling Favourite Space: " + text);
                delete waiting[spaceKey];
            }
        });
    };

    /**
     * If the user switches tabs while spaces are still being labelled, this function will prevent this from
     * happening. Allowing a location change in the middle of xmlhttp requests causes exceptions to be thrown in
     * Firefox (although, they seem to be ignored by IE). This is important in high latency environments where
     * users may get impatient.
     */
    var gotoUrl = function(url) {
        if ($.isEmptyObject(waiting)) {
            AJS.log("Busy toggling favourite for space '" + spaceKey + "'. Ignoring request to change tab.");
            return;
        }
        window.location = url;
    };


    // Override AUI tab click behaviour for spaces list because we don't preload tab content as AUI expects
    $(".spaceList.aui-tabs ul.tabs-menu").undelegate("a", "click");

    $(".spaceList .tabs a").click(function() {
        gotoUrl(this.href);
        return false;
    });

    $(".spaceList").delegate(".icon-add-fav, .icon-remove-fav", "click", function(e) {
        var button = $(e.target);
        var spaceKey = button.closest("tr").attr("data-space-key");
        if (waiting[spaceKey]) {
            AJS.log("Already busy toggling favourite space for '" + spaceKey + "'. Ignoring request.");
            return;
        }
        waiting[spaceKey] = true;
        toggleFavouriteSpace(spaceKey, button);
        return false;
    });

    $(".spaceList select.selectedTeam").change(function() {
        var dropDown = $(this);
        var baseUrl = dropDown.attr("data-base-url");
        var selectedTab = dropDown.attr("data-selected-tab");
        window.location = baseUrl + 'spacesSelectedTab=' + encodeURIComponent(selectedTab)
            + '&spacesSelectedTeam=' + encodeURIComponent(this.value);
    });


    // Dashboard Recently Updated Content Macro JS:

    var $recentUpdates = $("#recent-updates");
    var $recentUpdatesTabMenu = $recentUpdates.find("ul.tabs-menu");
    var $container = $recentUpdates.find(".tabs-pane.active-pane");
    var $showMoreLessButtonContainer = $recentUpdatesTabMenu.find(".tabletitleops");

    var getPageSize = function() {
        return parseInt($recentUpdates.attr("data-num-updates"));
    };

    var setPageSize = function(newPageSize) {
        return $recentUpdates.attr("data-num-updates", newPageSize);
    };

    var getUpdatesStepSize = function() {
        return parseInt($recentUpdates.attr("data-updates-step-size"));
    };

    var getMinPageSize = function() {
        return parseInt($recentUpdates.attr("data-min-updates"));
    };

    var getMaxPageSize = function() {
        return parseInt($recentUpdates.attr("data-max-updates"));
    };

    var getActiveTab = function() {
        return $recentUpdatesTabMenu.find("li.active-tab");
    };

    var getActiveTabKey = function() {
        return getActiveTab().attr("data-tab-key");
    };

    var getSelectedCategory = function() {
        var $categorySelect = $recentUpdates.find("#updatesSelectedCategory");
        return $categorySelect.length > 0 ? $categorySelect.val() : "";
    };

    var fetchUpdatesClickHandler = function() {
        var selectedCategory = getSelectedCategory();
        $container.html(Confluence.Templates.Dashboard.Updates.streamLoading());

        var activeTabKey = getActiveTabKey();
        // The popular tab handles its own content sizing
        if (activeTabKey == "popular") {
            $showMoreLessButtonContainer.hide();
        }
        else {
            $showMoreLessButtonContainer.show();
        }

        var showProfilePic = ($recentUpdates.attr("data-show-profile-pic") === "true");
        var showSpaceName = ($recentUpdates.attr("data-show-space-name") === "true");
        var maxUpdates = getPageSize();

        $.post(contextPath + '/rest/dashboardmacros/1.0/updates', {
            maxResults: maxUpdates,
            tab: activeTabKey,
            showProfilePic: showProfilePic,
            labels: $recentUpdates.attr("data-labels-filter")? $recentUpdates.attr("data-labels-filter") : "",
            spaces: $recentUpdates.attr("data-spaces-filter")? $recentUpdates.attr("data-spaces-filter") : "",
            users: $recentUpdates.attr("data-users-filter")? $recentUpdates.attr("data-users-filter") : "",
            types: $recentUpdates.attr("data-types-filter")? $recentUpdates.attr("data-types-filter") : "",
            category: selectedCategory,
            spaceKey: AJS.Meta.get("space-key")? AJS.Meta.get("space-key") : ""
        }).success(function(data) {
            // Ignore responses from the server if they don't match the currently selected tab so we don't have
            // concurrency issues.
            if (getActiveTabKey() != data.tabKey) {
                AJS.log("Ignoring response from server because selected tab is not " + data.tabKey);
                return;
            }

            $container.html(Confluence.Templates.Dashboard.Updates.updates({
                contextPath: contextPath,
                staticResourceUrlPrefix: AJS.params.staticResourceUrlPrefix,
                currentUsername: AJS.params.remoteUser,
                maxUpdates: maxUpdates,
                selectedTab: activeTabKey,
                viewableCategories: data.viewableCategories,
                selectedCategory: data.selectedCategory,
                showProfilePic: showProfilePic,
                showSpaceName: showSpaceName,
                changeSets: data.changeSets,
                noContentMessage: data.noContentMessage
            }));

            Confluence.Binder.userHover();
            bindCategorySelector();

            // HACK - a second AJAX call to load the popular tab. We still go through through the first call solely
            // to store the currently selected tab.
            if (activeTabKey == "popular") {
                Confluence.Dashboard.reloadPopularStream();
            }
        }).error(function(jqXHR, textStatus, errorThrown) {
            $recentUpdates.find(".tabs-pane.active-pane").empty();
            AJS.log("Failed to retrieve updates. Status: " + textStatus + ", Error: " + errorThrown);
            AJS.messages.error("#recent-updates .tabs-pane.active-pane", {
                title: "\u68C0\u6D4B\u66F4\u65B0\u5931\u8D25",
                body: "<p>" + "\u68C0\u6D4B\u66F4\u65B0\u5931\u8D25\u3002\u8BF7\u7A0D\u5019\u91CD\u8BD5\u3002" + "</p>",
                closeable: false
            });
        });
    };

    var updatePageSize = function(newPageSize) {
        var stepSize = getUpdatesStepSize();
        var minPageSize = getMinPageSize();
        var maxPageSize = getMaxPageSize();

        var $moreButton = $recentUpdatesTabMenu.find(".icon-show-more");
        var $lessButton = $recentUpdatesTabMenu.find(".icon-show-less");
        var moreButtonPageSize = (newPageSize + stepSize);
        var lessButtonPageSize = (newPageSize - stepSize);

        setPageSize(newPageSize);
        $moreButton.attr("href", $moreButton.attr("href").replace(/[\?\&]maxRecentlyUpdatedPageCount=\d+/, "maxRecentlyUpdatedPageCount=" + moreButtonPageSize));
        $lessButton.attr("href", $lessButton.attr("href").replace(/[\?\&]maxRecentlyUpdatedPageCount=\d+/, "maxRecentlyUpdatedPageCount=" + lessButtonPageSize));
        if (moreButtonPageSize > maxPageSize)
            $moreButton.addClass("disabled");
        else
            $moreButton.removeClass("disabled");
        if (lessButtonPageSize < minPageSize)
            $lessButton.addClass("disabled");
        else
            $lessButton.removeClass("disabled");
    };

    var bindCategorySelector = function() {
        $recentUpdates.find('select[name="updatesSelectedTeam"]').change(function() {
            fetchUpdatesClickHandler();
        });
    };

    // Override AUI tab click behaviour for recent updates because we don't preload tab content as AUI expects
    // and because we have other links (+/-) in the tab menu that AUI shouldn't handle
    $recentUpdatesTabMenu.undelegate("a", "click");

    // AJAX switch tab binding
    $recentUpdatesTabMenu.delegate("li.menu-item a", "click", function(e) {
        e.preventDefault();
        // Don't do anything if the user clicks on the active tab
        var $clickedTab = $(this).parent("li");
        if ($clickedTab.hasClass("active-tab"))
            return;

        // display the loading message so we're not at any point showing another tab's content in this tab
        $container.html(Confluence.Templates.Dashboard.Updates.streamLoading());

        var $activeTab = getActiveTab();
        $activeTab.removeClass("active-tab");
        $clickedTab.addClass("active-tab");
        fetchUpdatesClickHandler();
    });

    // AJAX page size bindings
    $recentUpdatesTabMenu.find(".icon-show-less").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("disabled"))
            return;

        updatePageSize(getPageSize() - getUpdatesStepSize());
        fetchUpdatesClickHandler();
    });
    $recentUpdatesTabMenu.find(".icon-show-more").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("disabled"))
            return;

        updatePageSize(getPageSize() + getUpdatesStepSize());
        fetchUpdatesClickHandler();
    });

    // Twixie for thumbnails
    $recentUpdates.delegate("li.update-item .update-item-icons .update-item-arrow", "click", function(e) {
        var thumbnailId = $(e.currentTarget).attr("data-thumbnail-id");
        $('#twixie-' + thumbnailId).toggleClass("icon-section-opened icon-section-closed");
        $('#thumbnail-' + thumbnailId).toggle("fast");
        return false;
    });

    bindCategorySelector();
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.dashboard:dashboard-macros-resources', location = 'com/atlassian/confluence/plugins/macros/dashboard/soy/stream-items.soy' */
// This file was automatically generated from stream-items.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dashboard == 'undefined') { Confluence.Templates.Dashboard = {}; }


Confluence.Templates.Dashboard.streamItems = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol id="stream-items">');
  Confluence.Templates.Dashboard.streamItemsContents(opt_data, output);
  output.append('</ol>', (opt_data.nextPageOffset) ? '<div class="stream-button-group"><a href="" data-next-page-offset="' + soy.$$escapeHtml(opt_data.nextPageOffset) + '" class="more-trigger button aui-button aui-button-link">' + soy.$$escapeHtml("\u663e\u793a\u66f4\u591a\u8bb0\u5f55") + '</a></div><div class="stream-items-loading" style="display: none">' + soy.$$escapeHtml("Loading\u2026") + '</div>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.streamItemsContents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var streamItemList17 = opt_data.streamItems;
  var streamItemListLen17 = streamItemList17.length;
  for (var streamItemIndex17 = 0; streamItemIndex17 < streamItemListLen17; streamItemIndex17++) {
    var streamItemData17 = streamItemList17[streamItemIndex17];
    Confluence.Templates.Dashboard.compactStreamItem({streamItem: streamItemData17}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.titleFirstStreamItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="stream-item title-first ', soy.$$escapeHtml(opt_data.streamItem.contentCssClass), '"><h1><a href="', soy.$$escapeHtml(opt_data.streamItem.url), '">', soy.$$escapeHtml(opt_data.streamItem.title), '</a></h1><div class="two-column-left-auto"><div class="valign-middle-container"><img class="avatar userLogo logo" src="', soy.$$escapeHtml(opt_data.streamItem.author.avatarUrl), '"><span class="by-line">by <a class="confluence-userlink" data-username="', soy.$$escapeHtml(opt_data.streamItem.author.userName), '" href="', soy.$$escapeHtml(opt_data.streamItem.author.url), '">', soy.$$escapeHtml(opt_data.streamItem.author.fullName), '</a></span></div>');
  var countItemList37 = opt_data.streamItem.counts;
  var countItemListLen37 = countItemList37.length;
  for (var countItemIndex37 = 0; countItemIndex37 < countItemListLen37; countItemIndex37++) {
    var countItemData37 = countItemList37[countItemIndex37];
    output.append('<div class="count-container valign-middle-container"><span class="icon ', soy.$$escapeHtml(countItemData37.cssClass), '"></span><span class="count">', soy.$$escapeHtml(countItemData37.count), '</span></div>');
  }
  output.append('</div>', (opt_data.streamItem.imageUris.length > 0 || opt_data.streamItem.excerpt) ? '<div>' + ((opt_data.streamItem.imageUris.length > 0) ? '<div class="thumbnails thumbnail-layout"><div><img src="' + soy.$$escapeHtml(opt_data.streamItem.imageUris[0]) + '"></div></div>' : '') + ((opt_data.streamItem.excerpt) ? '<div class="excerpt">' + opt_data.streamItem.excerpt + '</div>' : '') + '</div>' : '', '</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.compactStreamItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="stream-item stream-item-layout ', soy.$$escapeHtml(opt_data.streamItem.contentCssClass), '"><div class="avatar-container">', (! opt_data.streamItem.author.anonymous) ? '<a class="confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.streamItem.author.userName) + '" href="' + soy.$$escapeHtml(opt_data.streamItem.author.url) + '">' : '', '<img class="avatar userLogo logo" src="', soy.$$escapeHtml(opt_data.streamItem.author.avatarUrl), '">', (! opt_data.streamItem.author.anonymous) ? '</a>' : '', '</div><div class="stream-item-body-container"><div class="compact-stream-item-layout"><div class="stream-icon-container"><span class="', soy.$$escapeHtml(opt_data.streamItem.iconCssClass), '"></span></div><div class="stream-heading-container"><a class="stream-item-heading visitable" href="', soy.$$escapeHtml(opt_data.streamItem.url), '">', soy.$$escapeHtml(opt_data.streamItem.title), '</a></div>');
  var countItemList85 = opt_data.streamItem.counts;
  var countItemListLen85 = countItemList85.length;
  for (var countItemIndex85 = 0; countItemIndex85 < countItemListLen85; countItemIndex85++) {
    var countItemData85 = countItemList85[countItemIndex85];
    output.append('<div class="count-container valign-middle-container"><span class="icon ', soy.$$escapeHtml(countItemData85.cssClass), '"></span><span class="count">', soy.$$escapeHtml(countItemData85.count), '</span></div>');
  }
  output.append('</div><div class="flush-with-heading-container"><div class="stream-item-meta"><ol class="middot-list"><li><a class="confluence-userlink" data-username="', soy.$$escapeHtml(opt_data.streamItem.author.userName), '" href="', soy.$$escapeHtml(opt_data.streamItem.author.url), '">', soy.$$escapeHtml(opt_data.streamItem.author.fullName), '</a></li></ol><span class="stream-item-date">', soy.$$escapeHtml(opt_data.streamItem.friendlyDate), '</span></div>', (opt_data.streamItem.imageUris && opt_data.streamItem.imageUris.length > 0) ? '<div class="thumbnails thumbnail-layout"><div><img src="' + soy.$$escapeHtml(opt_data.streamItem.imageUris[0]) + '"></div></div>' : '', (opt_data.streamItem.excerpt) ? '<div class="excerpt">' + opt_data.streamItem.excerpt + '</div>' : '', '</div></div></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.dashboard:dashboard-macros-resources', location = 'com/atlassian/confluence/plugins/macros/dashboard/soy/recently-updated-dashboard.soy' */
// This file was automatically generated from recently-updated-dashboard.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dashboard == 'undefined') { Confluence.Templates.Dashboard = {}; }
if (typeof Confluence.Templates.Dashboard.Updates == 'undefined') { Confluence.Templates.Dashboard.Updates = {}; }


Confluence.Templates.Dashboard.Updates.streamLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="loading-container"><div class="loading-text wait">', soy.$$escapeHtml("\u6b63\u5728\u52a0\u8f7d\u2026"), '</div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.Updates.tabs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="recent-updates" class="aui-tabs horizontal-tabs" data-aui-tab-events-bound="true" data-num-updates="', soy.$$escapeHtml(opt_data.numUpdates), '" data-max-updates="', soy.$$escapeHtml(opt_data.updatesMaxSize), '" data-min-updates="', soy.$$escapeHtml(opt_data.updatesMinSize), '" data-updates-step-size="', soy.$$escapeHtml(opt_data.updatesStepSize), '" data-show-profile-pic="', soy.$$escapeHtml(opt_data.showProfilePic), '" data-show-space-name="', soy.$$escapeHtml(opt_data.showSpaceName), '"', (opt_data.macroParamsLabelsFilter) ? ' data-labels-filter="' + soy.$$escapeHtml(opt_data.macroParamsLabelsFilter) + '"' : '', (opt_data.macroParamsSpacesFilter) ? ' data-spaces-filter="' + soy.$$escapeHtml(opt_data.macroParamsSpacesFilter) + '"' : '', (opt_data.macroParamsUsersFilter) ? ' data-users-filter="' + soy.$$escapeHtml(opt_data.macroParamsUsersFilter) + '"' : '', (opt_data.macroParamsTypesFilter) ? ' data-types-filter="' + soy.$$escapeHtml(opt_data.macroParamsTypesFilter) + '"' : '', '>');
  if (opt_data.nonExistentLabels && opt_data.nonExistentLabels.length > 0) {
    output.append('<div class="nonexistent-labels">', soy.$$escapeHtml("\u8fd9\u4e9b\u6807\u7b7e\u4e0d\u5b58\u5728\u4e14\u88ab\u5ffd\u7565\uff1a"), '<ul>');
    var labelList46 = opt_data.nonExistentLabels;
    var labelListLen46 = labelList46.length;
    for (var labelIndex46 = 0; labelIndex46 < labelListLen46; labelIndex46++) {
      var labelData46 = labelList46[labelIndex46];
      output.append('<li>', soy.$$escapeHtml(labelData46), '</li>');
    }
    output.append('</ul></div>');
  }
  output.append('<ul class="tabs-menu">');
  var tabList53 = opt_data.tabs;
  var tabListLen53 = tabList53.length;
  for (var tabIndex53 = 0; tabIndex53 < tabListLen53; tabIndex53++) {
    var tabData53 = tabList53[tabIndex53];
    if (tabIndex53 == 0) {
      Confluence.Templates.Dashboard.Updates.updatesTab({tab: tabData53, selectedTab: opt_data.selectedTab, cssClass: 'first'}, output);
    } else {
      Confluence.Templates.Dashboard.Updates.updatesTab({tab: tabData53, selectedTab: opt_data.selectedTab, cssClass: ''}, output);
    }
  }
  output.append('<!--<li class="tabletitleops"><a class="tabletitleop icon icon-show-more', (! opt_data.showMoreEnabled) ? ' disabled' : '', '" href="', soy.$$escapeHtml(opt_data.showMoreUrl), '" title="', soy.$$escapeHtml("\u663e\u793a\u66f4\u591a"), '">', soy.$$escapeHtml("\u663e\u793a\u66f4\u591a"), '</a><a class="tabletitleop icon icon-show-less', (! opt_data.showLessEnabled) ? ' disabled' : '', '" href="', soy.$$escapeHtml(opt_data.showLessUrl), '" title="', soy.$$escapeHtml("\u663e\u793a\u66f4\u5c11"), '">', soy.$$escapeHtml("\u663e\u793a\u66f4\u5c11"), '</a></li>--></ul><div class="tabs-pane active-pane">');
  Confluence.Templates.Dashboard.Updates.updates(opt_data, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.Updates.updatesTab = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="menu-item ', soy.$$escapeHtml(opt_data.tab.name), (opt_data.cssClass) ? ' ' + soy.$$escapeHtml(opt_data.cssClass) : '', (opt_data.selectedTab == opt_data.tab.name) ? ' active-tab' : '', '" data-tab-key="', soy.$$escapeHtml(opt_data.tab.name), '"><a href="', soy.$$escapeHtml(opt_data.tab.url), '"><strong>', soy.$$escapeHtml(opt_data.tab.displayName), '</strong></a></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.Updates.updates = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.actionErrors && opt_data.actionErrors.length > 0) {
    Confluence.Templates.Dashboard.Updates.displayErrors(opt_data, output);
  } else if (opt_data.changeSets.length == 0) {
    output.append('<div class="loading-container"><div class="loading-text">', soy.$$escapeHtml(opt_data.noContentMessage), '</div></div>');
  } else {
    if (opt_data.selectedTab == 'team') {
      if (opt_data.viewableCategories.length > 0) {
        output.append('<div class="team-selection"><form class="aui"><label for="updatesSelectedCategory">', soy.$$escapeHtml("\u9009\u62e9\uff1a"), '</label><select id="updatesSelectedCategory" name="updatesSelectedTeam" class="select">');
        var categoryLabelList123 = opt_data.viewableCategories;
        var categoryLabelListLen123 = categoryLabelList123.length;
        for (var categoryLabelIndex123 = 0; categoryLabelIndex123 < categoryLabelListLen123; categoryLabelIndex123++) {
          var categoryLabelData123 = categoryLabelList123[categoryLabelIndex123];
          output.append('<option value="', soy.$$escapeHtml(categoryLabelData123.name), '" ', (categoryLabelData123.name == opt_data.selectedCategory) ? 'selected' : '', '>', soy.$$escapeHtml(categoryLabelData123.capitalised), '</option>');
        }
        output.append('</select></form></div>');
      } else {
        output.append('<div class="loading-container"><div class="loading-text">', soy.$$escapeHtml("\u6ca1\u6709\u5efa\u7acb\u5206\u7ec4\uff0c\u7528\u4e8e\u5206\u7ec4\u7ec4\u7ec7\u7a7a\u95f4\uff0c \u7a7a\u95f4\u6216\u7f51\u7ad9\u7ba1\u7406\u5458\u9700\u8981\u8bbe\u7f6e\u5206\u7ec4\u7684\u7c7b\u578b\uff0c\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5728\u7f16\u8f91\u7a7a\u95f4\u6807\u7b7e\u5b9e\u73b0\u7f16\u8f91\u7684\u9875\u9762\u5728\u7a7a\u95f4\u7ba1\u7406\u5458\u9875\u9762\u4e2d\u3002"), '</div></div>');
      }
    }
  }
  if (opt_data.showProfilePic) {
    output.append('<ul class="results-container update-groupings">');
    var changeSetList142 = opt_data.changeSets;
    var changeSetListLen142 = changeSetList142.length;
    for (var changeSetIndex142 = 0; changeSetIndex142 < changeSetListLen142; changeSetIndex142++) {
      var changeSetData142 = changeSetList142[changeSetIndex142];
      output.append('<li class="grouping"><div class="update-item-profile">');
      Confluence.Templates.User.logo({canView: changeSetData142.canViewProfile, currentUsername: opt_data.currentUsername, username: (changeSetData142.modifier) ? changeSetData142.modifier.name : '', profilePictureInfo: changeSetData142.profilePictureInfo}, output);
      output.append('</div><div class="update-items"><h4>');
      Confluence.Templates.User.usernameLink({canView: changeSetData142.canViewProfile, username: (changeSetData142.modifier) ? changeSetData142.modifier.name : '', fullName: (changeSetData142.modifier) ? changeSetData142.modifier.fullName : ''}, output);
      output.append('</h4><ul>');
      var changeItemList167 = changeSetData142.recentUpdates;
      var changeItemListLen167 = changeItemList167.length;
      for (var changeItemIndex167 = 0; changeItemIndex167 < changeItemListLen167; changeItemIndex167++) {
        var changeItemData167 = changeItemList167[changeItemIndex167];
        Confluence.Templates.Dashboard.Updates.updateItem({changeItem: changeItemData167, changeSetNumber: changeSetIndex142, changeItemNumber: changeItemIndex167}, output);
      }
      output.append('</ul></div></li>');
    }
    output.append('</ul>');
  } else {
    output.append('<ul class="results-container updates-no-pics">');
    var changeSetList178 = opt_data.changeSets;
    var changeSetListLen178 = changeSetList178.length;
    for (var changeSetIndex178 = 0; changeSetIndex178 < changeSetListLen178; changeSetIndex178++) {
      var changeSetData178 = changeSetList178[changeSetIndex178];
      var changeItemList179 = changeSetData178.recentUpdates;
      var changeItemListLen179 = changeItemList179.length;
      for (var changeItemIndex179 = 0; changeItemIndex179 < changeItemListLen179; changeItemIndex179++) {
        var changeItemData179 = changeItemList179[changeItemIndex179];
        Confluence.Templates.Dashboard.Updates.updateItemNoPics({changeSet: changeSetData178, changeItem: changeItemData179, showSpaceName: opt_data.showSpaceName}, output);
      }
    }
    output.append('</ul>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.Updates.displayErrors = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.actionErrors && opt_data.actionErrors.length > 0) {
    output.append('<div class="aui-message error"><span class="svg-icon error size-18"></span><strong>', soy.$$escapeHtml("\u53d1\u751f\u5982\u4e0b\u9519\u8bef\uff1a"), '</strong><ul>');
    var errorList193 = opt_data.actionErrors;
    var errorListLen193 = errorList193.length;
    for (var errorIndex193 = 0; errorIndex193 < errorListLen193; errorIndex193++) {
      var errorData193 = errorList193[errorIndex193];
      output.append('<li>', soy.$$escapeHtml(errorData193), '</li>');
    }
    output.append('</ul></div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.Updates.updateItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="update-item"><div class="update-item-icons">', (opt_data.changeItem.thumbnailable) ? '<a id="twixie-' + soy.$$escapeHtml(opt_data.changeSetNumber) + soy.$$escapeHtml(opt_data.changeItemNumber) + '" href="" data-thumbnail-id="' + soy.$$escapeHtml(opt_data.changeSetNumber) + soy.$$escapeHtml(opt_data.changeItemNumber) + '" class="update-item-arrow icon icon-section-closed"></a>' : '<span class="update-item-arrow"></span>');
  Confluence.Templates.Icons.contentIcon({content: opt_data.changeItem.entity, iconTitle: opt_data.changeItem.friendlyContentType, iconCss: opt_data.changeItem.iconCss, linkHref: opt_data.changeItem.urlPath}, output);
  output.append('</div><div class="update-item-content"><span class="update-item-title">', opt_data.changeItem.html, '</span>', (opt_data.changeItem.summary) ? '<p class="update-item-summary">' + soy.$$escapeHtml(opt_data.changeItem.summary) + '</p>' : '', '<div><span class="update-item-date">', soy.$$escapeHtml(opt_data.changeItem.updateDescription), '</span>', (opt_data.changeItem.viewChangesLink) ? '&nbsp;<span class="update-item-changes">(<a href="' + soy.$$escapeHtml(opt_data.changeItem.viewChangesLink) + '">' + soy.$$escapeHtml("\u67e5\u770b\u53d8\u52a8") + '</a>)</span>' : '', '</div>', (opt_data.changeItem.thumbnailable) ? '<div class="update-item-thumbnail-container"><a href="' + soy.$$escapeHtml(opt_data.changeItem.imageUrl) + '"><img id="thumbnail-' + soy.$$escapeHtml(opt_data.changeSetNumber) + soy.$$escapeHtml(opt_data.changeItemNumber) + '" class="thumbnail" src="' + soy.$$escapeHtml(opt_data.changeItem.thumbnailUrl) + '" width="' + soy.$$escapeHtml(opt_data.changeItem.thumbnailWidth) + '" height="' + soy.$$escapeHtml(opt_data.changeItem.thumbnailHeight) + '" style="display: none" /></a></div>' : '', '</div></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Dashboard.Updates.updateItemNoPics = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li>');
  Confluence.Templates.Icons.contentIcon({content: opt_data.changeItem.entity, iconTitle: opt_data.changeItem.friendlyContentType, iconCss: opt_data.changeItem.iconCss, linkHref: opt_data.changeItem.urlPath}, output);
  output.append(' ', opt_data.changeItem.html);
  if (opt_data.showSpaceName) {
    output.append(' ');
    if (opt_data.changeItem.contentType == 'userinfo') {
      output.append('<span class="smalltext">(');
      Confluence.Templates.User.usernameOrAnonymous({user: opt_data.changeSet.modifier}, output);
      output.append(')</span>');
    } else if (opt_data.changeItem.contentType == 'status') {
      output.append('<span class="smalltext">(');
      Confluence.Templates.User.fullNameOrAnonymous({user: opt_data.changeSet.modifier}, output);
      output.append(')</span>');
    } else {
      output.append('<span class="smalltext">(', soy.$$escapeHtml(opt_data.changeItem.spaceName), ')</span>');
    }
  }
  output.append('<div style="float:right;" class="smalltext">');
  Confluence.Templates.User.usernameLink({canView: opt_data.changeSet.canViewProfile, username: (opt_data.changeSet.modifier) ? opt_data.changeSet.modifier.name : '', fullName: (opt_data.changeSet.modifier) ? opt_data.changeSet.modifier.fullName : ''}, output);
  output.append(' (', soy.$$escapeHtml(opt_data.changeItem.friendlyUpdateTime), ')</div></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.dashboard:dashboard-macros-resources', location = 'com/atlassian/confluence/plugins/macros/dashboard/js/popular.js' */
(function ($) {

    var POPULAR_STREAM_URL = AJS.Meta.get("context-path") + "/rest/popular/1/stream/content";

    function get(url, $container, append, options) {
        options = options || {};

        var ajaxData = {
                days: 7,
                pageSize: 20
            };

        ajaxData = $.extend(ajaxData, options);

        $.ajax({
            type: "GET",
            url: url,
            data: ajaxData,
            contentType : "application/json; charset=utf-8",
            dataType : "json"
        }).success(function (data) {
            if (data.streamItems && data.streamItems.length === 0) {
                AJS.trigger("dashboard-recentupdates-popular.no-updates", {container:$container})
                $(".loading-text").html("\u6B64\u9009\u9879\u5361\u4E0B\u9762\u662F\u53D7\u6B22\u8FCE\u7684\u5185\u5BB9\u3002\u51FA\u73B0\u5728\u8FD9\u91CC\u7684\u662F\u65B0\u5EFA\u7684\u3001\u6709\u6CE8\u91CA\u6216\u8005\u53D7\u6B22\u8FCE\u7684\u5185\u5BB9\u3002").removeClass("wait");
                return false;
            }

            if (append) {
                var $streamItems = $(Confluence.Templates.Dashboard.streamItemsContents(data));
                var $parent = $container.find("#stream-items");
                $parent.append($streamItems);

                var $moreLink = $container.find(".more-trigger");
                AJS.$(".stream-items-loading").hide();
                if (data.nextPageOffset) {
                    $moreLink.show();
                    $moreLink.attr("data-next-page-offset", data.nextPageOffset);
                } else {
                    $moreLink.remove();
                }
            } else {
                var $streamItems = $(Confluence.Templates.Dashboard.streamItems(data));
                $container.html($streamItems);

                $container.find(".more-trigger").click(function () {
                    AJS.$(".stream-items-loading").show();
                    AJS.$(this).hide();

                    get(POPULAR_STREAM_URL, $container, true, {
                        nextPageOffset: $(this).attr("data-next-page-offset")
                    });

                    return false;
                });
            }

            Confluence.Binder.userHover();
        });
    }

    $(document).ready(function () {

        function loadPopularStream(options) {
            if ($("#recent-updates .menu-item.popular").hasClass("active-tab")) {
                var $container = $("#recent-updates .tabs-pane.active-pane");

                $container.html(Confluence.Templates.Dashboard.Updates.streamLoading());

                get(POPULAR_STREAM_URL, $container, false, options);
            }
        }

        loadPopularStream();

        Confluence.Dashboard = {
            reloadPopularStream: function (options) {
                loadPopularStream(options);
            }
        }
    });

})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.macros.dashboard:dashboard-macros-resources', location = 'com/atlassian/confluence/plugins/macros/dashboard/js/drafts.js' */
AJS.$(function ($) {

    $draftsCount = $(".drafts-section .more-entities");

    var totalDraftsCount = AJS.Meta.get("drafts-count");

    var reenableDraftRow = function($row) {
        // Remove pointer events so the user can't navigate to the link while it is waiting to delete.
        $row.css("pointer-events", "auto");
        $row.find(".icon-wait").removeClass("icon-wait").addClass("icon-remove");
    }

    var removeDraftRow = function($row) {
        $row.css("pointer-events", "none");
        $row.find(".icon-remove").removeClass("icon-remove").addClass("icon-wait");
    }


    $(".discard-draft").one("click", function () {
        var $li = $(this).closest("li");
        var id = $(this).data("id");
        var message = "\u4F60\u786E\u5B9A\u8981\u653E\u5F03\u8FD9\u4E2A\u8349\u7A3F\uFF1F";

        if (confirm(message)) {

            removeDraftRow($li);

            AJS.safeAjax({
                url: Confluence.getContextPath() + "/json/deletedraft.action",
                type: "GET",
                dataType: "json",
                data: {
                    draftId: id
                },
                success: function (data) {
                    if (data.actionErrors) {
                        var errorHtml = ["<ul>"],
                            errors = data.actionErrors;

                        for (var i = 0; i < errors.length; i++) {
                            AJS.log("error: " + (errors[i]));
                            errorHtml.push("<li>" + errors[i] + "</li>");
                        }
                        errorHtml.push("</ul>");

                        AJS.messages.error({
                            title: "\u9519\u8BEF",
                            body: "\u5220\u9664\u8349\u7A3F\u65F6\u53D1\u751F\u9519\u8BEF\u3002" + " " + errorHtml.join("\n")
                        });

                        reenableDraftRow($li);
                    } else {

                        $li.fadeOut(1e3, function() {
                            $draftsCount.text(AJS.format("\u663E\u793A {0} \u4E4B {1}", $li.siblings().length, --totalDraftsCount));
                            $(this).remove();
                        });
                    }
                },
                error: function (data) {
                    reenableDraftRow($li);

                    AJS.messages.error({
                        title: "Error",
                        body: data["errors"] || "\u53D1\u751F\u672A\u77E5\u9519\u8BEF. \u8BF7\u68C0\u67E5\u65E5\u5FD7. "
                    });

                }
            });
        }
    });

});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-easyuser-admin:easyuser', location = 'js/easyuser.js' */
AJS.toInit(function ($) {

    var $sendInvitationsForm = $('#easyuser-send-invites-form'),
        resetButton = $('#reset-invite-token'),
        inviteLinkField = $('#invite-link'),
        inviteEmail = $('#inviteEmail'),
        $messageContainer = $("#invite-user-errors"),
        $sendInvitationsSubmitButton = $sendInvitationsForm.find('input[type="submit"]');
	
    function msg(text, type) {
        AJS.MessageHandler.message($messageContainer, text, type);
    }

    function errorMsg(text, statusText, error) {
        AJS.MessageHandler.error($messageContainer, text);
        if (statusText)
            AJS.log(text + ": [statusText = '" + statusText + "'], [error = '" + error + "']");
    }

    function postJson(options) {
        msg(options.loadingMessage, 'info');
        return $.ajax({
            url: Confluence.getContextPath() + options.url,
            type: 'POST',
            dataType: 'json',
            data: options.data,
            contentType: 'application/json',
            success: options.success,
            error: options.error,
            statusCode: {
                401: function () {
                    errorMsg("\u4F60\u7684\u4F1A\u8BDD\u5DF2\u8D85\u65F6\u3002\u8BF7\u5237\u65B0\u672C\u9875\u9762\u7136\u540E\u91CD\u8BD5\u3002");
                }
            }
        });
    }

    function undoTokenReset() {
        resetButton.prop('disabled', true);

        postJson({
            url: "/rest/easyuser/latest/undoTokenReset",
            data: null,
            success: function (data) {
                var previousUrl = data.signupUrl;
                inviteLinkField.attr("href", previousUrl).text(previousUrl);
                msg("The invitation URL has been restored to its previous value.");
            },
            error: function (xhr, statusText, error) {
                errorMsg("The previous invitation URL could not be restored.", status, error);
            },
            loadingMessage: "Saving your changes..."
        }).always(function () {
            resetButton.removeProp('disabled');
        });
    }

    AJS.MessageHandler.closeOnNew(true);

    resetButton.click(function () {
        resetButton.prop('disabled', true);

        postJson({
            url: '/rest/easyuser/latest/refreshToken',
            data: null,
            success: function (data) {
                inviteLinkField.attr("href", data.signupUrl).text(data.signupUrl);

                msg("The invitation URL has been reset. Users will be unable to sign up with the old one.");
                $messageContainer.find('.success').first().append(
                        $('<a>').prop('href', '#').text("Restore previous URL.").prop('id', 'undo-reset-token').click(undoTokenReset));
            },
            error: function (xhr, statusText, error) {
                errorMsg("There was an error generating a new invitation URL.", status, error);
            },
            loadingMessage: "Saving your changes..."
        })
        .always(function () {
            resetButton.removeProp('disabled');
        });
        return false;
    });

    inviteEmail.click(function () {
        inviteEmail.prop('disabled', true);
        var notify = inviteEmail.prop('checked');

        postJson({
            url: "/rest/easyuser/latest/sendEmailOnInvite",
            data: $.toJSON(notify),
            success: function (notifySaved) {
                var text = notifySaved ? "Administrators will now receive emails when users sign up." :
                        "Administrators will no longer receive emails when users sign up.";
                msg(text);
            },
            error: function (xhr, statusText, error) {
                errorMsg("\u66F4\u65B0\u65F6\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u6CE8\u518C\u90AE\u4EF6\u5C06\u4F1A\u88AB\u53D1\u9001\u3002", status, error);
            },
            loadingMessage: "Saving your changes..."
        })
        .always(function () {
            inviteEmail.removeProp('disabled');
        });
    });

    $sendInvitationsSubmitButton.click(function () {
        var emailMessage = $('#invite-user-email-content').val(),
            recipients = $.trim($('#recipient-list').val());

        if (!recipients) {
            errorMsg("You need to specify at least one email address to send an invitation.");
            return false;
        }

        recipients = recipients.split(',');

        postJson({
            url: '/rest/easyuser/latest/sendUserInvites',
            data: $.toJSON({
                emailMessage: emailMessage,
                recipientList: recipients
            }),
            success: function (response) {
                // Show number of sent emails OR a mix of email addresses sent and failed
                var happyText = response.sentAddresses.length && '<span id="sent-invitations-count">' + response.sentAddresses.length + '</span>';
                var sadText = response.failedAddresses.length && '<span id="failed-invitations">' + response.failedAddresses.join(', ') + '</span>';
                if (!sadText) {
                    msg(AJS.format("Successfully sent {0} invitation(s).", happyText));
                } else if (!happyText) {
                    errorMsg(AJS.format("Failed to send invitation emails, no valid email addresses found: {0}.", sadText));
                } else {
                    errorMsg(AJS.format("Successfully sent {0} invitation(s), but some supplied email addresses were invalid: {1}.", happyText, sadText));
                }
            },
            error: function (xhr, statusText, error) {
                errorMsg("There was an error sending your invitations.", status, error);
            },
            loadingMessage: "Sending email invitations..."
        });

        return false;
    });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-easyuser-admin:easyuser', location = 'js/easyusersignupsettings.js' */
AJS.toInit(function ($) {
	var $formsContainer = $('#easyuser-forms-container'),
		$signupMessageContainer = $('#signup-user-errors'),
		$saveButton = $('#save'),
		$modeSelect = $('input[name="signupMode"]'),
		$domainsSignupContainer = $("#domains-signup-container"),
		$domains = $('#domains-signup'),
		$signupEnabledCheckbox = $('#isSignupEnabled'),
		$publicOptionsContainer = $('#restrictedModesBorder-container'),
		$smtpMessage = $('#configure-smtp-msg-signup'),
        $signupModeRestricted = $('#signupMode-restricted');
	
	if($smtpMessage.length) {
		AJS.MessageHandler.message($signupMessageContainer, $smtpMessage.html(), 'warning');
	}

	var checkDomains = function(){
		var val = $domains.val();
		if (!val || /^\s*$/.test(val)){
			$saveButton.prop('disabled', true);
		}
		else{
			$saveButton.prop('disabled', false);
		}
	};
	
	$('#easyuser-signup-domains-form').submit(function() {
		var mode = $('input:radio[name=signupMode]:checked').val(),
			notifyAdmin = $('#notifyAdmin').prop('checked');

        if (!$('#isSignupEnabled').prop('checked')) {
            mode = "private";
        }
		
		if (mode != 'restricted'){
			$domains.val('');
		}
		var domains = $domains.val();
		var dataObj = {enabled: mode === 'public', domains: domains, notifyAdmin : notifyAdmin};

		$saveButton.prop('disabled', true);
		
		$.ajax({
            url: Confluence.getContextPath() + '/rest/easyuser/latest/signup/setSignupSettings',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            data: $.toJSON(dataObj),
            success: function (data) {
                $saveButton.prop('disabled', false);
                AJS.MessageHandler.message($signupMessageContainer, "Successfully saved signup settings.");
                
                $formsContainer.toggleClass('private-signup', mode === 'private' || mode === 'restricted');
                $formsContainer.toggleClass('public-signup', mode === 'public');
                //$formsContainer.toggleClass('disabled-signup', mode === 'disabled');
                
            },
            error: function (xhr, statusText, error) {
            	$saveButton.removeProp('disabled');
            	AJS.log("Saving sign up settings errors: [statusText = '" + statusText + "'], [error = '" + error + "']");
                AJS.MessageHandler.message($signupMessageContainer, "There was an error saving the signup settings.", 'error');
            },
            statusCode: {
                401: function () {
                    AJS.MessageHandler.message($messageContainer, "\u4F60\u7684\u4F1A\u8BDD\u5DF2\u8D85\u65F6\u3002\u8BF7\u5237\u65B0\u672C\u9875\u9762\u7136\u540E\u91CD\u8BD5\u3002", 'error');
                }
            }
        });
		return false;
	});

	$modeSelect.change(function() {
		var mode = this.value;

		$('input:radio[name=signupMode]').prop('checked', false);
		$(this).prop('checked', true);
		
		if (mode === 'restricted'){
			checkDomains();
			$domainsSignupContainer.show();
			$domains.focus();
		} else {
			$domainsSignupContainer.hide();
			$saveButton.prop('disabled', false);
		}
	});
	
	$domains.keyup(function(){
		checkDomains();
	});

    $signupEnabledCheckbox.change(function() {
        var isChecked = this.checked;

        if (isChecked === true) { // public/domain restricted signup
            $publicOptionsContainer.css({opacity : 1});
            $modeSelect.enable();
            if(!$signupModeRestricted.data("ajs-capable")) {
                $signupModeRestricted.disable()
            }
        } else { // private signup
            $modeSelect.change();
            $modeSelect.disable();
            $saveButton.prop('disabled', false);
            $publicOptionsContainer.css({opacity : 0.5})
        }
    });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


