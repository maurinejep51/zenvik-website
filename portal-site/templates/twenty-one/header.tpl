<!doctype html>
<html lang="en">
<head>
    <meta charset="{$charset}" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{if $kbarticle.title}{$kbarticle.title} - {/if}{$pagetitle} - {$companyname}</title>
    {include file="$template/includes/head.tpl"}
    {$headoutput}
</head>
<body class="primary-bg-color" data-phone-cc-input="{$phoneNumberInputStyle}">
    {if $captcha}{$captcha->getMarkup()}{/if}
    {$headeroutput}

    <header id="header" class="header zt-header">
        {if $loggedin}
            <div class="zt-client-bar">
                <div class="container zt-client-bar-inner">
                    <button type="button" class="btn zt-notification-btn" data-toggle="popover" id="accountNotifications" data-placement="bottom">
                        <i class="far fa-flag"></i>
                        {if count($clientAlerts) > 0}
                            <span class="zt-notification-count">{count($clientAlerts)}</span>
                            <span class="d-none d-sm-inline">{lang key='notifications'}</span>
                        {else}
                            <span class="zt-notification-count">0</span>
                            <span class="d-none d-sm-inline">{lang key='nonotifications'}</span>
                        {/if}
                    </button>
                    <div id="accountNotificationsContent" class="w-hidden">
                        <ul class="client-alerts">
                        {foreach $clientAlerts as $alert}
                            <li>
                                <a href="{$alert->getLink()}">
                                    <i class="fas fa-fw fa-{if $alert->getSeverity() == 'danger'}exclamation-circle{elseif $alert->getSeverity() == 'warning'}exclamation-triangle{elseif $alert->getSeverity() == 'info'}info-circle{else}check-circle{/if}"></i>
                                    <div class="message">{$alert->getMessage()}</div>
                                </a>
                            </li>
                        {foreachelse}
                            <li class="none">
                                {lang key='notificationsnone'}
                            </li>
                        {/foreach}
                        </ul>
                    </div>

                    <div class="zt-active-client">
                        <span class="zt-active-client-label">{lang key='loggedInAs'}:</span>
                        <a href="{$WEB_ROOT}/clientarea.php?action=details" class="zt-active-client-name">
                            {if $client.companyname}
                                {$client.companyname}
                            {else}
                                {$client.fullName}
                            {/if}
                        </a>
                        <a href="{routePath('user-accounts')}" class="zt-client-switch" data-toggle="tooltip" data-placement="bottom" title="Switch Account">
                            <i class="fad fa-random"></i>
                        </a>
                        {if $adminMasqueradingAsClient || $adminLoggedIn}
                            <a href="{$WEB_ROOT}/logout.php?returntoadmin=1" class="zt-return-admin" data-toggle="tooltip" data-placement="bottom" title="{if $adminMasqueradingAsClient}{lang key='adminmasqueradingasclient'} {lang key='logoutandreturntoadminarea'}{else}{lang key='adminloggedin'} {lang key='returntoadminarea'}{/if}">
                                <i class="fas fa-redo-alt"></i>
                                <span class="d-none d-md-inline-block">{lang key="admin.returnToAdmin"}</span>
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}

        <nav class="navbar navbar-expand-xl zt-navbar">
            <div class="container zt-navbar-inner">
                <a class="navbar-brand zt-brand" href="{$WEB_ROOT}/index.php">
                    <img src="{$WEB_ROOT}/templates/twenty-one/img/logo.png" alt="{$companyname}" class="zt-logo-img" onerror="{if $assetLogoPath}this.onerror=null;this.src='{$assetLogoPath}';{else}this.style.display='none';{/if}">
                </a>

                <button class="navbar-toggler zt-menu-toggle" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fas fa-bars fa-fw"></span>
                </button>

                <div class="collapse navbar-collapse zt-navbar-collapse" id="mainNavbar">
                    <ul id="nav" class="navbar-nav zt-primary-nav">
                        <li class="nav-item dropdown zt-nav-item zt-has-mega">
                            <a class="nav-link dropdown-toggle zt-nav-link" href="#" id="ztServicesMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                            <div class="dropdown-menu zt-mega-menu" aria-labelledby="ztServicesMenu">
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-server"></i><span>Hosting</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/contact.php"><i class="fas fa-code"></i><span>Software Development</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/contact.php"><i class="fas fa-globe"></i><span>Website Development</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/contact.php"><i class="fas fa-bullhorn"></i><span>Marketing &amp; Branding</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/contact.php"><i class="fas fa-network-wired"></i><span>ICT Services</span></a>
                            </div>
                        </li>
                        <li class="nav-item dropdown zt-nav-item zt-has-mega">
                            <a class="nav-link dropdown-toggle zt-nav-link" href="#" id="ztHostingMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hosting</a>
                            <div class="dropdown-menu zt-mega-menu" aria-labelledby="ztHostingMenu">
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-hdd"></i><span>Web Hosting</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-microchip"></i><span>VPS Hosting</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-shopping-bag"></i><span>Hosting for WooCommerce</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-database"></i><span>Supabase Hosting</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fab fa-wordpress"></i><span>WordPress Hosting</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-envelope"></i><span>Email Hosting</span></a>
                            </div>
                        </li>
                        <li class="nav-item dropdown zt-nav-item zt-has-mega">
                            <a class="nav-link dropdown-toggle zt-nav-link" href="#" id="ztDomainsMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Domains</a>
                            <div class="dropdown-menu zt-mega-menu" aria-labelledby="ztDomainsMenu">
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php?a=add&amp;domain=register"><i class="fas fa-search"></i><span>Buy Domain</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php?a=add&amp;domain=transfer"><i class="fas fa-exchange-alt"></i><span>Transfer Domain</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/store/ssl"><i class="fas fa-lock"></i><span>SSL Certificate</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/domain/pricing"><i class="fas fa-tags"></i><span>Domain Prices</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/domainchecker.php"><i class="fas fa-fingerprint"></i><span>WHOIS Lookup</span></a>
                            </div>
                        </li>
                        <li class="nav-item dropdown zt-nav-item zt-has-mega">
                            <a class="nav-link dropdown-toggle zt-nav-link" href="#" id="ztResellerMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reseller</a>
                            <div class="dropdown-menu zt-mega-menu" aria-labelledby="ztResellerMenu">
                                <a class="zt-mega-link" href="{$WEB_ROOT}/contact.php"><i class="fas fa-handshake"></i><span>Domain Resellers</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-layer-group"></i><span>Web Hosting Reseller</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-bolt"></i><span>LiteSpeed Hosting Reseller</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/cart.php"><i class="fas fa-cloud"></i><span>VPS Reseller</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/affiliates.php"><i class="fas fa-chart-line"></i><span>Affiliates</span></a>
                            </div>
                        </li>
                        <li class="nav-item dropdown zt-nav-item zt-has-mega">
                            <a class="nav-link dropdown-toggle zt-nav-link" href="#" id="ztSupportMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Support</a>
                            <div class="dropdown-menu zt-mega-menu" aria-labelledby="ztSupportMenu">
                                <a class="zt-mega-link" href="{routePath('knowledgebase-index')}"><i class="fas fa-book"></i><span>Knowledgebase</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/submitticket.php"><i class="fas fa-life-ring"></i><span>Open Ticket</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/serverstatus.php"><i class="fas fa-signal"></i><span>Network Status</span></a>
                                <a class="zt-mega-link" href="{$WEB_ROOT}/contact.php"><i class="fas fa-headset"></i><span>Contact Support</span></a>
                            </div>
                        </li>
                    </ul>

                    <div class="zt-header-actions">
                        {if $languagechangeenabled && count($locales) > 1 || $currencies}
                            <button type="button" class="btn zt-localisation-btn" data-toggle="modal" data-target="#modalChooseLanguage">
                                <span class="zt-flag-wrap">
                                    <span class="iti-flag {if $activeLocale.countryCode === '001'}us{else}{$activeLocale.countryCode|lower}{/if}"></span>
                                </span>
                                <span class="zt-localisation-text">{$activeLocale.localisedName} / {$activeCurrency.prefix}{$activeCurrency.code}</span>
                            </button>
                        {/if}

                        <a class="zt-cart-btn" href="{$WEB_ROOT}/cart.php?a=view" aria-label="{lang key='carttitle'}">
                            <i class="far fa-shopping-cart fa-fw"></i>
                            <span id="cartItemCount" class="zt-cart-count">{$cartitemcount}</span>
                        </a>

                        <ul class="navbar-nav zt-account-menu">
                            {include file="$template/includes/navbar.tpl" navbar=$secondaryNavbar rightDrop=true}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    {include file="$template/includes/network-issues-notifications.tpl"}

    <nav class="master-breadcrumb" aria-label="breadcrumb">
        <div class="container">
            {include file="$template/includes/breadcrumb.tpl"}
        </div>
    </nav>

    {include file="$template/includes/validateuser.tpl"}
    {include file="$template/includes/verifyemail.tpl"}

    {if $templatefile == 'homepage'}
        {if $registerdomainenabled || $transferdomainenabled}
            {include file="$template/includes/domain-search.tpl"}
        {/if}
    {/if}

    <section id="main-body">
        <div class="{if !$skipMainBodyContainer}container{/if}">
            <div class="row">

            {if !$inShoppingCart && ($primarySidebar->hasChildren() || $secondarySidebar->hasChildren())}
                <div class="col-lg-4 col-xl-3">
                    <div class="sidebar">
                        {include file="$template/includes/sidebar.tpl" sidebar=$primarySidebar}
                    </div>
                    {if !$inShoppingCart && $secondarySidebar->hasChildren()}
                        <div class="d-none d-lg-block sidebar">
                            {include file="$template/includes/sidebar.tpl" sidebar=$secondarySidebar}
                        </div>
                    {/if}
                </div>
            {/if}
            <div class="{if !$inShoppingCart && ($primarySidebar->hasChildren() || $secondarySidebar->hasChildren())}col-lg-8 col-xl-9{else}col-12{/if} primary-content">
