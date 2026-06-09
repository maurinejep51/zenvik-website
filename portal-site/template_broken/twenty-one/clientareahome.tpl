{include file="$template/includes/flashmessage.tpl"}

<div class="zt-dashboard">
    <section class="zt-dashboard-welcome">
        <div>
            <span class="zt-dashboard-kicker">Zenvik Client Portal</span>
            <h1>Welcome to your Zenvik Client Portal</h1>
            <p>Manage your hosting, domains, invoices and support from one secure dashboard.</p>
        </div>
        <div class="zt-dashboard-secure">
            <i class="fas fa-shield-alt"></i>
            <span>Secure account dashboard</span>
        </div>
    </section>

    <section class="zt-dashboard-section">
        <div class="zt-dashboard-section-heading">
            <h2>Quick Actions</h2>
            <p>Jump straight into the most common account tasks.</p>
        </div>
        <div class="zt-quick-actions">
            <a href="clientarea.php?action=services"><i class="fas fa-cube"></i><span>Manage Services</span></a>
            <a href="clientarea.php?action=domains"><i class="fas fa-globe"></i><span>Manage Domains</span></a>
            <a href="submitticket.php"><i class="fas fa-life-ring"></i><span>Open Ticket</span></a>
            <a href="clientarea.php?action=invoices"><i class="fas fa-file-invoice-dollar"></i><span>View Invoices</span></a>
        </div>
    </section>

    <section class="zt-dashboard-section">
        <div class="zt-dashboard-section-heading">
            <h2>Account Overview</h2>
            <p>Your active services, domains, support requests and unpaid invoices.</p>
        </div>
        <div class="zt-stat-grid">
            <a href="clientarea.php?action=services" class="zt-stat-card">
                <span class="zt-stat-icon zt-stat-blue"><i class="fas fa-cube"></i></span>
                <span class="zt-stat-value">{$clientsstats.productsnumactive}</span>
                <span class="zt-stat-label">{lang key='navservices'}</span>
            </a>
            {if $clientsstats.numdomains || $registerdomainenabled || $transferdomainenabled}
                <a href="clientarea.php?action=domains" class="zt-stat-card">
                    <span class="zt-stat-icon zt-stat-green"><i class="fas fa-globe"></i></span>
                    <span class="zt-stat-value">{$clientsstats.numactivedomains}</span>
                    <span class="zt-stat-label">{lang key='navdomains'}</span>
                </a>
            {elseif $condlinks.affiliates && $clientsstats.isAffiliate}
                <a href="affiliates.php" class="zt-stat-card">
                    <span class="zt-stat-icon zt-stat-green"><i class="fas fa-shopping-cart"></i></span>
                    <span class="zt-stat-value">{$clientsstats.numaffiliatesignups}</span>
                    <span class="zt-stat-label">{lang key='affiliatessignups'}</span>
                </a>
            {else}
                <a href="clientarea.php?action=quotes" class="zt-stat-card">
                    <span class="zt-stat-icon zt-stat-green"><i class="far fa-file-alt"></i></span>
                    <span class="zt-stat-value">{$clientsstats.numquotes}</span>
                    <span class="zt-stat-label">{lang key='quotes'}</span>
                </a>
            {/if}
            <a href="supporttickets.php" class="zt-stat-card">
                <span class="zt-stat-icon zt-stat-red"><i class="fas fa-comments"></i></span>
                <span class="zt-stat-value">{$clientsstats.numactivetickets}</span>
                <span class="zt-stat-label">{lang key='navtickets'}</span>
            </a>
            <a href="clientarea.php?action=invoices" class="zt-stat-card">
                <span class="zt-stat-icon zt-stat-gold"><i class="fas fa-credit-card"></i></span>
                <span class="zt-stat-value">{$clientsstats.numunpaidinvoices}</span>
                <span class="zt-stat-label">{lang key='navinvoices'}</span>
            </a>
        </div>
    </section>

    <section class="zt-dashboard-section">
        <div class="zt-dashboard-section-heading">
            <h2>Support Area</h2>
            <p>Find answers, open requests, and check service notices.</p>
        </div>
        <div class="zt-support-actions">
            <a href="{routePath('knowledgebase-index')}"><i class="fas fa-book"></i><span>Knowledgebase</span></a>
            <a href="submitticket.php"><i class="fas fa-life-ring"></i><span>Open Ticket</span></a>
            <a href="serverstatus.php"><i class="fas fa-signal"></i><span>Network Status</span></a>
            <a href="{routePath('announcement-index')}"><i class="fas fa-bullhorn"></i><span>Announcements</span></a>
        </div>
    </section>

    {foreach $addons_html as $addon_html}
        <div class="zt-addon-output">
            {$addon_html}
        </div>
    {/foreach}

    {if $captchaError}
        <div class="alert alert-danger">
            {$captchaError}
        </div>
    {/if}

    <section class="zt-dashboard-section zt-panels-section">
        <div class="zt-dashboard-section-heading">
            <h2>Your Services &amp; Activity</h2>
            <p>Live WHMCS panels, module output and hook-driven account information.</p>
        </div>
        <div class="client-home-cards zt-client-home-cards">
            <div class="row">
                <div class="col-12">
                    {function name=outputHomePanels}
                        <div menuItemName="{$item->getName()}" class="card zt-home-panel card-accent-{$item->getExtra('color')}{if $item->getClass()} {$item->getClass()}{/if}"{if $item->getAttribute('id')} id="{$item->getAttribute('id')}"{/if}>
                            <div class="card-header">
                                <h3 class="card-title m-0">
                                    {if $item->getExtra('btn-link') && $item->getExtra('btn-text')}
                                        <div class="float-right">
                                            <a href="{$item->getExtra('btn-link')}" class="btn btn-default bg-color-{$item->getExtra('color')} btn-xs">
                                                {if $item->getExtra('btn-icon')}<i class="{$item->getExtra('btn-icon')}"></i>{/if}
                                                {$item->getExtra('btn-text')}
                                            </a>
                                        </div>
                                    {/if}
                                    {if $item->hasIcon()}<i class="{$item->getIcon()}"></i>&nbsp;{/if}
                                    {$item->getLabel()}
                                    {if $item->hasBadge()}&nbsp;<span class="badge">{$item->getBadge()}</span>{/if}
                                </h3>
                            </div>
                            {if $item->hasBodyHtml()}
                                <div class="card-body">
                                    {$item->getBodyHtml()}
                                </div>
                            {/if}
                            {if $item->hasChildren()}
                                <div class="list-group{if $item->getChildrenAttribute('class')} {$item->getChildrenAttribute('class')}{/if}">
                                    {foreach $item->getChildren() as $childItem}
                                        {if $childItem->getUri()}
                                            <a menuItemName="{$childItem->getName()}" href="{$childItem->getUri()}" class="list-group-item list-group-item-action{if $childItem->getClass()} {$childItem->getClass()}{/if}{if $childItem->isCurrent()} active{/if}"{if $childItem->getAttribute('dataToggleTab')} data-toggle="tab"{/if}{if $childItem->getAttribute('target')} target="{$childItem->getAttribute('target')}"{/if} id="{$childItem->getId()}">
                                                {if $childItem->hasIcon()}<i class="{$childItem->getIcon()}"></i>&nbsp;{/if}
                                                {$childItem->getLabel()}
                                                {if $childItem->hasBadge()}&nbsp;<span class="badge">{$childItem->getBadge()}</span>{/if}
                                            </a>
                                        {else}
                                            <div menuItemName="{$childItem->getName()}" class="list-group-item list-group-item-action{if $childItem->getClass()} {$childItem->getClass()}{/if}" id="{$childItem->getId()}">
                                                {if $childItem->hasIcon()}<i class="{$childItem->getIcon()}"></i>&nbsp;{/if}
                                                {$childItem->getLabel()}
                                                {if $childItem->hasBadge()}&nbsp;<span class="badge">{$childItem->getBadge()}</span>{/if}
                                            </div>
                                        {/if}
                                    {/foreach}
                                </div>
                            {/if}
                            <div class="card-footer">
                                {if $item->hasFooterHtml()}
                                    {$item->getFooterHtml()}
                                {/if}
                            </div>
                        </div>
                    {/function}

                    {foreach $panels as $item}
                        {if $item->getExtra('colspan')}
                            {outputHomePanels}
                            {assign "panels" $panels->removeChild($item->getName())}
                        {/if}
                    {/foreach}

                </div>
                <div class="col-md-6 col-lg-12 col-xl-6">

                    {foreach $panels as $item}
                        {if $item@iteration is odd}
                            {outputHomePanels}
                        {/if}
                    {/foreach}

                </div>
                <div class="col-md-6 col-lg-12 col-xl-6">

                    {foreach $panels as $item}
                        {if $item@iteration is even}
                            {outputHomePanels}
                        {/if}
                    {/foreach}

                </div>
            </div>
        </div>
    </section>
</div>
