                    </div>

                    </div>
                    {if !$inShoppingCart && $secondarySidebar->hasChildren()}
                        <div class="d-lg-none sidebar sidebar-secondary">
                            {include file="$template/includes/sidebar.tpl" sidebar=$secondarySidebar}
                        </div>
                    {/if}
                <div class="clearfix"></div>
            </div>
        </div>
    </section>

    <footer id="footer" class="footer">
        <div class="container">
            <div class="row mb-4 align-items-start">
                <div class="col-md-4 footer-logo">
                    <a href="{$WEB_ROOT}/index.php">
                        {if $assetLogoPath}
                            <img src="{$assetLogoPath}" alt="{$companyname}">
                        {else}
                            <h3>{$companyname}</h3>
                        {/if}
                    </a>
                    <p class="mt-3">Premium hosting & cloud platform — Zenvik Technologies</p>
                </div>
                <div class="col-md-2">
                    <h5>Hosting</h5>
                    <ul class="list-unstyled">
                        <li><a href="{$WEB_ROOT}/hosting/web-hosting.php">Web Hosting</a></li>
                        <li><a href="{$WEB_ROOT}/hosting/wordpress.php">Hosting for WordPress</a></li>
                        <li><a href="{$WEB_ROOT}/hosting/woocommerce.php">Hosting for WooCommerce</a></li>
                        <li><a href="{$WEB_ROOT}/hosting/reseller.php">Reseller Hosting</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5>Servers</h5>
                    <ul class="list-unstyled">
                        <li><a href="{$WEB_ROOT}/servers/managed-cpanel.php">Managed cPanel VPS</a></li>
                        <li><a href="{$WEB_ROOT}/servers/vps.php">VPS Hosting</a></li>
                        <li><a href="{$WEB_ROOT}/servers/dedicated.php">Dedicated Servers</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Contact</h5>
                    <ul class="list-unstyled contact-list">
                        <li><strong>Phone:</strong> <a href="tel:+254717990272">+254 717 990 272</a></li>
                        <li><strong>Email:</strong> <a href="mailto:info@zenviktechnologies.com">info@zenviktechnologies.com</a></li>
                        <li><strong>Support:</strong> <a href="mailto:support@zenviktechnologies.com">support@zenviktechnologies.com</a></li>
                        <li><strong>Hosting:</strong> <a href="mailto:hosting@zenviktechnologies.com">hosting@zenviktechnologies.com</a></li>
                    </ul>
                    <div class="social-links mt-2">
                        <a href="https://www.instagram.com/zenviktechnologies/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/zenviktechnologies/" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.tiktok.com/@zenviktechnologies" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                        <a href="https://x.com/ZenvikTech" aria-label="X"><i class="fab fa-x-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/zenvik-technologies-ltd/" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <ul class="list-inline mb-7 text-center float-lg-right">
                {include file="$template/includes/social-accounts.tpl"}

                {if $languagechangeenabled && count($locales) > 1 || $currencies}
                    <li class="list-inline-item">
                        <button type="button" class="btn" data-toggle="modal" data-target="#modalChooseLanguage">
                            <div class="d-inline-block align-middle">
                                <div class="iti-flag {if $activeLocale.countryCode === '001'}us{else}{$activeLocale.countryCode|lower}{/if}"></div>
                            </div>
                            {$activeLocale.localisedName}
                            /
                            {$activeCurrency.prefix}
                            {$activeCurrency.code}
                        </button>
                    </li>
                {/if}
            </ul>

            <ul class="nav justify-content-center justify-content-lg-start mb-7">
                <li class="nav-item">
                    <a class="nav-link" href="{$WEB_ROOT}/contact.php">
                        {lang key='contactus'}
                    </a>
                </li>
                {if $acceptTOS}
                    <li class="nav-item">
                        <a class="nav-link" href="{$tosURL}" target="_blank">{lang key='ordertos'}</a>
                    </li>
                {/if}
            </ul>

            <p class="copyright mb-0">
                {lang key="copyrightFooterNotice" year=$date_year company=$companyname}
            </p>
        </div>
    </footer>

    <div id="fullpage-overlay" class="w-hidden">
        <div class="outer-wrapper">
            <div class="inner-wrapper">
                <img src="{$WEB_ROOT}/assets/img/overlay-spinner.svg" alt="">
                <br>
                <span class="msg"></span>
            </div>
        </div>
    </div>

    <div class="modal system-modal fade" id="modalAjax" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">{lang key='close'}</span>
                    </button>
                </div>
                <div class="modal-body">
                    {lang key='loading'}
                </div>
                <div class="modal-footer">
                    <div class="float-left loader">
                        <i class="fas fa-circle-notch fa-spin"></i>
                        {lang key='loading'}
                    </div>
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        {lang key='close'}
                    </button>
                    <button type="button" class="btn btn-primary modal-submit">
                        {lang key='submit'}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <form method="get" action="{$currentpagelinkback}">
        <div class="modal modal-localisation" id="modalChooseLanguage" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                        {if $languagechangeenabled && count($locales) > 1}
                            <h5 class="h5 pt-5 pb-3">{lang key='chooselanguage'}</h5>
                            <div class="row item-selector">
                                <input type="hidden" name="language" data-current="{$language}" value="{$language}" />
                                {foreach $locales as $locale}
                                    <div class="col-4">
                                        <a href="#" class="item{if $language == $locale.language} active{/if}" data-value="{$locale.language}">
                                            {$locale.localisedName}
                                        </a>
                                    </div>
                                {/foreach}
                            </div>
                        {/if}
                        {if !$loggedin && $currencies}
                            <p class="h5 pt-5 pb-3">{lang key='choosecurrency'}</p>
                            <div class="row item-selector">
                                <input type="hidden" name="currency" data-current="{$activeCurrency.id}" value="">
                                {foreach $currencies as $selectCurrency}
                                    <div class="col-4">
                                        <a href="#" class="item{if $activeCurrency.id == $selectCurrency.id} active{/if}" data-value="{$selectCurrency.id}">
                                            {$selectCurrency.prefix} {$selectCurrency.code}
                                        </a>
                                    </div>
                                {/foreach}
                            </div>
                        {/if}
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-default">{lang key='apply'}</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    {if !$loggedin && $adminLoggedIn}
        <a href="{$WEB_ROOT}/logout.php?returntoadmin=1" class="btn btn-return-to-admin" data-toggle="tooltip" data-placement="bottom" title="{if $adminMasqueradingAsClient}{lang key='adminmasqueradingasclient'} {lang key='logoutandreturntoadminarea'}{else}{lang key='adminloggedin'} {lang key='returntoadminarea'}{/if}">
            <i class="fas fa-redo-alt"></i>
            <span class="d-none d-md-inline-block">{lang key="admin.returnToAdmin"}</span>
        </a>
    {/if}

    <a href="https://wa.me/254717990272" target="_blank" class="whatsapp-float" aria-label="WhatsApp support">
        <i class="fab fa-whatsapp fa-lg"></i>
    </a>

    {include file="$template/includes/generate-password.tpl"}

    {$footeroutput}

</body>
</html>
