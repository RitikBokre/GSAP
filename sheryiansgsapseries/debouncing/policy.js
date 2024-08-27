<style>
    [data-skin="PicDesktop"] .o-bWHzMb.o-ducbvd.o-cglRxs.YONMcZ.o-fpkJwH.o-dCyDMp .lwnY3h.l9NkHx .o-fznJDS.h5JUm2 .o-dJmcbh.o-bCRRBE.o-fzpihY.o-cWzten .o-dJmcbh .o-cpnuEd.o-bUVylL.o-fznJEv.o-chNNuk.o-fznJFh.o-cPFhqO.o-fpkJwH.o-dsiSgT.o-eZTujG.o-bkmzIL.o-fzpihY.o-fzpilm {
        align-items: flex-start;
    }

    .es-pb-link {
        display: block;
        background: none;
        text-decoration: none;
        color: #0288d1;
        font-size: 14px;
        font-weight: 700;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        opacity: 0;
        height: 0;
    }

    .es-pb-logo {
        width: 80px;
        margin: 0 4px;
    }

    .es-redirect-img {
        width: 10px;
    }

    .es-ad-span {
        color: #fff;
        font-size: 8.1px;
        font-weight: 600;
        padding: 2px;
        background-color: #aaa;
        border-radius: 1.8px;
        margin-right: 5px;
    }

    .es-with-span {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
</style>

<button id="link" class="es-pb-link js-es-tracking-insurance">
    <span class="es-ad-span">Ad</span>Save upto ₹<span class="es-save-text"></span>* on Insurance
    <span class="es-with-span"> from
        <img class="es-pb-logo" src="https://imgd.aeplcdn.com/0x0/media/cw/2cajieb_1764361.png"
            alt="Policy Bazaar Logo" />
        <img class="es-redirect-img" src="https://imgd.aeplcdn.com/0x0/media/bw/6rvonva_1608869.png"
            alt="Redirect Icon" />
    </span>
</button>

<script>
    // Code that runs in your function
    var pbModelData = {
        punch: { value: 15000, id: 1238 },
        exter: { value: 15000, id: 2437 },
        altroz: { value: 15000, id: 1151 },
        taisor: { value: 20000, id: 2105 },
        venue: { value: 20000, id: 2309 },
        "xuv-3xo": { value: 20000, id: 2595 },
        sonet: { value: 20000, id: 1831 },
        nexon: { value: 20000, id: 1286 },
        scorpio: { value: 25000, id: 1985 },
        thar: { value: 25000, id: 1260 },
        hyryder: { value: 30000, id: 1340 },
        creta: { value: 30000, id: 2307 },
        seltos: { value: 30000, id: 2141 },
        "scorpio-n": { value: 30000, id: 1264 },
        xuv700: { value: 30000, id: 1290 },
    };

    function pbLinkIntegration() {
        var insuranceWrapper = document.querySelector(".js-es-tracking-insurance");
        var urlLink = window.location.href.toLowerCase();
        if (insuranceWrapper) {
            var link = document.getElementById("link");
            var saveTxtEl = document.querySelector(".es-save-text");
            if (link) {
                link.onclick = function () {
                    if (typeof dataLayer !== "undefined") {
                        dataLayer.push({
                            event: "CWInteractive",
                            cat: "$$campaignId",
                            act: `77_PB_Insurance_Click_MDA_D`,
                        });
                    }
                    trackBrighuClicks();
                    if (
                        typeof handlePolicybazaarLeadCreation === 'function'
                    ) {
                                                handlePolicybazaarLeadCreation("growthcartrade","cartrade_link");

                    }
                };
                if (saveTxtEl) {
                    for (var key in pbModelData) {
                        if (urlLink.includes(key)) {
                            saveTxtEl.textContent = pbModelData[key].value;
                            link.style.opacity = 1;
                            link.style.height = '100%';
                            break;
                        }
                    }
                }
            }

            let brighuTrackingObject = () => {
                return {
                    businesstype: "ES".toLowerCase(),
                    mediapropertyid: 77,
                    mediapropertytype: "static".toLowerCase(),
                    featuredcampaignid: $$campaignId,
                    cityid: $$cityId,
                    templateid: $$templateId,
                    applicationid : $$applicationId,
                    pageid: $$pageId,
                    featuredmodelid: pbModelData[key].id.toString()
                };
            };
            let trackBrighuImpression = () => {
                let trackObject = brighuTrackingObject();
                let gaCat = "MediaProperty";
                let gaAct = "MediaImpression";
                let gaLabel = Object.keys(trackObject)
                    .filter((key) => !!trackObject[key])
                    .map((key) => key + "=" + trackObject[key])
                    .join("|");
                if ("ES" === "DS") {
                    let dealerName = "".split(" ").join("").toLowerCase();
                    gaLabel += "|dealername=" + dealerName;
                }
                if (trackCustomData !== undefined) {
                    trackCustomData(gaCat, gaAct, gaLabel);
                }
            };
            let trackBrighuClicks = () => {
                let trackObject = brighuTrackingObject();
                let gaCat = "MediaProperty";
                let gaAct = "MediaClick";
                let gaLabel = Object.keys(trackObject)
                    .filter((key) => !!trackObject[key])
                    .map((key) => key + "=" + trackObject[key])
                    .join("|");
                if ("ES" === "DS") {
                    let dealerName = "".split(" ").join("").toLowerCase();
                    gaLabel += "|dealername=" + dealerName;
                }
                if (trackCustomData !== undefined) {
                    trackCustomData(gaCat, gaAct, gaLabel);
                }
            };

            // brighu tracking block ends

            let getModelCityInformation = () => {
                let targetMakeModel = getMakeModelName();
                if (targetMakeModel === null) {
                    return ["", getCookie("_CustCityMaster")].join("|");
                }
                return ["", getCookie("_CustCityMaster"), targetMakeModel].join("|");
            };
            let getCookie = (name) => {
                let parts = document.cookie.split("; " + name + "=");
                if (parts.length < 2) {
                    // Cookie doesnt exist
                    return "NA";
                }
                // Cookie exists and you will find its value in the last element of parts
                let cookieValue = parts.pop();
                /*
                        Depending on where the cookie appears in the list, there may or may not be more cookies
                        in the popped string, separated by a semi-colon.
                        In any case, we want the first element after split
                        */
                let cityName = cookieValue.split(";").shift();
                return cityName == "" || cityName == "Select City" ? "NA" : cityName;
            };

            let getMakeModelName = () => {
                try {
                    let url = window.location.href;
                    let queryStringStartsAt = url.indexOf("?");
                    if (queryStringStartsAt !== -1)
                        url = url.slice(0, queryStringStartsAt);
                    const modelEndpointLiteral =
                        "([a-zA-Z0-9_-]+)-cars/" +
                        "((?!news|expert-reviews|features|videos)[a-zA-Z0-9_-]+)/";
                    const modelEndpoint = new RegExp(modelEndpointLiteral + "$");
                    const versionEndpoint = new RegExp(
                        modelEndpointLiteral +
                        "(" +
                        "(?!colours|images|360-view|mileage|news|expert-reviews|features|user-reviews)" + // Exclude these
                        "[a-zA-Z0-9_-]+)/$"
                    ); // version masking name
                    const picEndpoint = new RegExp(modelEndpointLiteral + "price-in-.+");
                    const modelCaptureGroups = new RegExp(modelEndpointLiteral);

                    let test =
                        modelEndpoint.test(url) ||
                        versionEndpoint.test(url) ||
                        picEndpoint.test(url);
                    if (!test) return null;
                    let match = url.match(modelCaptureGroups);
                    return [match[1], match[2]].join("_");
                } catch (e) {
                    console.error(e);
                    return null;
                }
            };

            function trackImpression() {
                if (typeof dataLayer !== "undefined") {
                    dataLayer.push({
                        event: "CWNonInteractive",
                        cat: "$$campaignId",
                        act: `77_PB_Insurance_Shown_MDA_D`,
                    });
                }
                trackBrighuImpression();
            }
            trackImpression();
        }
    }
    if (document.querySelector(".js-es-tracking-insurance")) {
        pbLinkIntegration();
    } else {
        window.addEventListener("load", function () {
            pbLinkIntegration();
        });
    }
</script>