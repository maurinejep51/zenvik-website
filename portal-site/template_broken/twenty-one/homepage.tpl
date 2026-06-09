<div class="zt-home">
    <section class="zt-home-hero">
        <div class="zt-home-hero-content">
            <div class="zt-home-kicker">
                <span>Premium hosting by {$companyname}</span>
            </div>
            <h1>Reliable Hosting. Built for Business Growth.</h1>
            <p>Launch faster with secure web hosting, VPS, WordPress hosting, WooCommerce hosting, domains, SSL and business email from Zenvik Technologies.</p>
            <div class="zt-home-actions">
                <a href="{$WEB_ROOT}/cart.php" class="zt-btn zt-btn-primary">Explore Hosting Plans</a>
                <a href="{$WEB_ROOT}/cart.php?a=add&amp;domain=register" class="zt-btn zt-btn-secondary">Search a Domain</a>
            </div>
            <ul class="zt-hero-highlights">
                <li><i class="fas fa-check-circle"></i>99.9% Uptime</li>
                <li><i class="fas fa-check-circle"></i>Free Migration</li>
                <li><i class="fas fa-check-circle"></i>Secure Infrastructure</li>
                <li><i class="fas fa-check-circle"></i>Business Email Ready</li>
                <li><i class="fas fa-check-circle"></i>Domain &amp; SSL Support</li>
            </ul>
        </div>
        <div class="zt-home-hero-panel">
            <div class="zt-hero-metric">
                <span>99.9%</span>
                <strong>Uptime target</strong>
            </div>
            <div class="zt-hero-stack">
                <div><i class="fas fa-server"></i><span>Hosting</span></div>
                <div><i class="fas fa-cloud"></i><span>VPS</span></div>
                <div><i class="fas fa-lock"></i><span>SSL</span></div>
                <div><i class="fas fa-envelope"></i><span>Email</span></div>
            </div>
        </div>
    </section>

    <section class="zt-home-section zt-hosting-categories">
        <div class="zt-section-heading">
            <span>Hosting Categories</span>
            <h2>Hosting for every stage of growth</h2>
            <p>Choose dependable hosting products for websites, stores, mailboxes, servers, and reseller businesses.</p>
        </div>

        {if !empty($productGroups)}
            <div class="zt-product-groups">
                {foreach $productGroups as $productGroup}
                    <article class="zt-product-card">
                        <i class="fas fa-layer-group"></i>
                        <h3>{$productGroup->name}</h3>
                        <p>{$productGroup->tagline}</p>
                        <a href="{$productGroup->getRoutePath()}" class="zt-card-link">{lang key='browseProducts'}</a>
                    </article>
                {/foreach}
            </div>
        {/if}

        <div class="zt-category-grid">
            <a href="{$WEB_ROOT}/cart.php" class="zt-category-card">
                <i class="fas fa-hdd"></i>
                <span>Web Hosting</span>
            </a>
            <a href="{$WEB_ROOT}/cart.php" class="zt-category-card">
                <i class="fab fa-wordpress"></i>
                <span>WordPress Hosting</span>
            </a>
            <a href="{$WEB_ROOT}/cart.php" class="zt-category-card">
                <i class="fas fa-shopping-bag"></i>
                <span>WooCommerce Hosting</span>
            </a>
            <a href="{$WEB_ROOT}/cart.php" class="zt-category-card">
                <i class="fas fa-microchip"></i>
                <span>VPS Hosting</span>
            </a>
            <a href="{$WEB_ROOT}/cart.php" class="zt-category-card">
                <i class="fas fa-envelope"></i>
                <span>Email Hosting</span>
            </a>
            <a href="{$WEB_ROOT}/cart.php" class="zt-category-card">
                <i class="fas fa-handshake"></i>
                <span>Reseller Hosting</span>
            </a>
        </div>
    </section>

    {if $registerdomainenabled || $transferdomainenabled}
        <section class="zt-home-section zt-domain-actions">
            <div class="zt-section-heading">
                <span>Domains</span>
                <h2>Find, secure, and manage your domain</h2>
                <p>Register, transfer, price-check, and protect domains with SSL from one hosting partner.</p>
            </div>
            <div class="zt-action-grid">
                {if $registerdomainenabled}
                    <a href="{$WEB_ROOT}/cart.php?a=add&amp;domain=register" class="zt-action-card"><i class="fas fa-search"></i>Register Domain</a>
                {/if}
                {if $transferdomainenabled}
                    <a href="{$WEB_ROOT}/cart.php?a=add&amp;domain=transfer" class="zt-action-card"><i class="fas fa-exchange-alt"></i>Transfer Domain</a>
                {/if}
                <a href="{$WEB_ROOT}/domainchecker.php" class="zt-action-card"><i class="fas fa-fingerprint"></i>WHOIS Lookup</a>
                <a href="{routePath('domain-pricing')}" class="zt-action-card"><i class="fas fa-tags"></i>Domain Prices</a>
            </div>
        </section>
    {/if}

    <section class="zt-home-section">
        <div class="zt-section-heading">
            <span>Why Choose Zenvik</span>
            <h2>Built for reliable business hosting</h2>
        </div>
        <div class="zt-feature-grid">
            <article class="zt-feature-card"><i class="fas fa-bolt"></i><h3>Fast Hosting Performance</h3><p>Optimized hosting foundations for fast websites and dependable daily traffic.</p></article>
            <article class="zt-feature-card"><i class="fas fa-shield-alt"></i><h3>Secure Infrastructure</h3><p>Security-first hosting with SSL support, updates, and resilient server practices.</p></article>
            <article class="zt-feature-card"><i class="fas fa-headset"></i><h3>24/7 Support</h3><p>Reach the Zenvik team through tickets, support resources, and direct assistance.</p></article>
            <article class="zt-feature-card"><i class="fas fa-route"></i><h3>Free Website Migration</h3><p>Move your existing site with practical migration guidance and setup support.</p></article>
            <article class="zt-feature-card"><i class="fas fa-envelope-open-text"></i><h3>Business Email Ready</h3><p>Set up professional email hosting alongside your website and domains.</p></article>
            <article class="zt-feature-card"><i class="fas fa-chart-line"></i><h3>Scalable for Growth</h3><p>Start with web hosting and scale into VPS, cloud, and reseller options.</p></article>
        </div>
    </section>

    <section class="zt-home-section zt-split-section">
        <div>
            <span class="zt-section-label">VPS / Cloud Hosting</span>
            <h2>More power for demanding projects</h2>
            <p>Upgrade into flexible infrastructure for higher traffic, custom applications, backend services, and managed server needs.</p>
            <div class="zt-home-actions">
                <a href="{$WEB_ROOT}/cart.php" class="zt-btn zt-btn-primary">View VPS Options</a>
                <a href="{$WEB_ROOT}/contact.php" class="zt-btn zt-btn-secondary">Talk to Sales</a>
            </div>
        </div>
        <div class="zt-mini-grid">
            <a href="{$WEB_ROOT}/cart.php"><i class="fas fa-microchip"></i>VPS Hosting</a>
            <a href="{$WEB_ROOT}/cart.php"><i class="fas fa-user-shield"></i>Managed VPS</a>
            <a href="{$WEB_ROOT}/cart.php"><i class="fas fa-cloud"></i>Cloud Hosting</a>
            <a href="{$WEB_ROOT}/cart.php"><i class="fas fa-database"></i>Supabase Hosting</a>
        </div>
    </section>

    <section class="zt-home-section zt-migration-section">
        <div class="zt-section-heading">
            <span>Migration</span>
            <h2>Move to Zenvik with less friction</h2>
        </div>
        <div class="zt-migration-grid">
            <article><i class="fas fa-window-restore"></i><h3>Website Migration</h3><p>Move website files, databases, and hosting settings.</p></article>
            <article><i class="fas fa-mail-bulk"></i><h3>Email Migration</h3><p>Transition business inboxes and email settings.</p></article>
            <article><i class="fas fa-project-diagram"></i><h3>DNS Support</h3><p>Configure DNS records for domains, websites, and email.</p></article>
            <article><i class="fas fa-lock"></i><h3>SSL Setup</h3><p>Install certificates and secure website traffic.</p></article>
        </div>
    </section>

    <section class="zt-home-section zt-support-center">
        <div class="zt-section-heading">
            <span>Support Center</span>
            <h2>Help when you need it</h2>
        </div>
        <div class="zt-support-grid">
            <a href="{routePath('knowledgebase-index')}"><i class="fal fa-book"></i>{lang key='knowledgebasetitle'}</a>
            <a href="submitticket.php"><i class="fal fa-life-ring"></i>{lang key='homepage.submitTicket'}</a>
            <a href="serverstatus.php"><i class="fal fa-server"></i>{lang key='networkstatustitle'}</a>
            <a href="{routePath('announcement-index')}"><i class="fal fa-bullhorn"></i>{lang key='announcementstitle'}</a>
            <a href="{routePath('download-index')}"><i class="fal fa-download"></i>{lang key='downloadstitle'}</a>
        </div>
        <div class="zt-client-tools">
            <a href="clientarea.php"><i class="fal fa-home"></i>{lang key='homepage.yourAccount'}</a>
            <a href="clientarea.php?action=services"><i class="far fa-cubes"></i>{lang key='homepage.manageServices'}</a>
            {if $registerdomainenabled || $transferdomainenabled || $numberOfDomains}
                <a href="clientarea.php?action=domains"><i class="fal fa-globe"></i>{lang key='homepage.manageDomains'}</a>
            {/if}
            <a href="supporttickets.php"><i class="fal fa-comments"></i>{lang key='homepage.supportRequests'}</a>
            <a href="clientarea.php?action=masspay&amp;all=true"><i class="fal fa-credit-card"></i>{lang key='homepage.makeAPayment'}</a>
        </div>
    </section>

    <section class="zt-final-cta">
        <h2>Ready to host your website with Zenvik?</h2>
        <div class="zt-home-actions">
            <a href="{$WEB_ROOT}/cart.php" class="zt-btn zt-btn-primary">Get Started</a>
            <a href="{$WEB_ROOT}/submitticket.php" class="zt-btn zt-btn-secondary">Contact Support</a>
        </div>
    </section>
</div>
