$(function () {
    $.ajax({
        url:"templates/il8n.json",  
        async: true,
        complete: internationalization,
        success: function jsonData(data) {
            internationalization(data, getLang());
        },
        error: function() {
            console.log("não carregou json");
        }
    });
});

function internationalization(data, lang) {
    console.log(data, lang);
    if (lang == "success") {
        lang = getLang();
        data = data.responseJSON;
    }

    if(window.location.href.substr(-10) == "about.html") {
        // About page
        $("title").html(data["about earth"][lang]);
        $("#info1").html(data["a visualization of global weather conditions"][lang]);
        $("#info2").html(data["forecast by supercomputers"][lang]);
        $("#info3").html(data["updated every three hours"][lang]);
        $("#info4").html(data["ocean surface current estimates"][lang]);
        $("#info5").html(data["updated every five days"][lang]);

        $("#community").html(data["Community"][lang]);
        $("#author").html(data["Author"][lang]);
        $("#source").html(data["Source"][lang]);
        $("#modules").html(data["Modules"][lang]);
        $("#weather-data").html(data["Weather Data"][lang]);
        $("#ocean-currents-data").html(data["Ocean Currents Data"][lang]);
        $("#decoders").html(data["GRIB/NetCDF Decoder"][lang]);
        $("#geo-data").html(data["Geographic Data"][lang]);
        $("#hosting").html(data["Hosting"][lang]);
        $("#butterfly").html(data["Waterman Butterfly"][lang]);
        $("#inspiration").html(data["Inspiration"][lang]);
        $("#atmospheric-text-1").html(data["atmospheric pressure corresponds roughly to altitude"][lang]);
        $("#atmospheric-text-2").html(data["several pressure layers are meteorologically interesting"][lang]);
        $("#atmospheric-text-3").html(data["they show data assuming the earth is completely smooth"][lang]);
        $("#atmospheric-text-4").html(data["note: 1 hectopascal (hPa) ≡ 1 millibar (mb)"][lang]);
        $("#layer-text-1").html(data["the \"Surface\" layer represents conditions at ground or water level"][lang]);
        $("#layer-text-2").html(data["this layer follows the contours of mountains, valleys, etc."][lang]);
        $("#layer-text-3").html(data["overlays show another dimension of data using color"][lang]);
        $("#layer-text-4").html(data["some overlays are valid at a specific height"][lang]);
        $("#layer-text-5").html(data["while others are valid for the entire thickness of the atmosphere"][lang]);
        $("#wind").html(data["Wind | "][lang]);
        $("#wind-description").html("&nbsp;" + data["wind speed at specified height"][lang]);
        $("#temp").html(data["Temp | "][lang]);
        $("#temp-description").html("&nbsp;" + data["temperature at specified height"][lang]);
        $("#tpw").html(data["TPW"][lang]);
        $("#tpw-desc").html(data["Total Precipitable Water"][lang]);
        $("#footer1").html(data["weather and ocean data are generated from numerical models"][lang]);
        $("#footer2").html(data["implies no guarantee of accuracy"][lang]);
    }
    else {
        // Index page
        $("title").html(data["title"][lang]);
        $("#sponsor-hide").html(data["community"][lang]);
        $("#date").html(data["Date"][lang]);
        $("#data").html(data["Data"][lang]);
        $("#scale-label").html(data["Scale"][lang]);
        $("#source-label").html(data["DataSource"][lang]);
        $("#control-label").html(data["Control"][lang]);
        $("#mode-label").html(data["Mode"][lang]);
        $("#height-label").html(data["Height"][lang]);
        $("#overlay-label").html(data["Overlay | "][lang]);
        $("#overlay-label2").html(data["Overlay | "][lang]);
        $("#nav-now").html(data["Now"][lang]);
        $("#nav-now").attr("title", data["Current Conditions"][lang]);
        $("#show-location").attr("title", data["Current Position"][lang]);
        $("#option-show-grid").attr("title", data["Toggle Grid"][lang]);
        $("#mode").html(data["Mode"][lang]);
        $("#wind-mode-enable").html(data["Air"][lang]);
        $("#ocean-mode-enable").html(data["Ocean"][lang]);
        $("#surface-level").attr("title", data["Surface"][lang]);
        $("#overlay-off").html(data["None"][lang]);
        $("#overlay-wind").html(data["Wind"][lang]);
        $("#overlay-wind").attr("title", data["Wind Speed"][lang]);
        $("#overlay-temp").attr("title", data["Temperature"][lang]);
        $("#overlay-temp").html(data["Temp"][lang]);
        $("#overlay-text").html(data["Overlay"][lang]);
        $("#overlay-relative_humidity").attr("title", data["Relative Humidity"][lang]);
        $("#overlay-relative_humidity").html(data["RH"][lang]);
        $("#overlay-air_density").attr("title", data["Air Density"][lang]);
        $("#overlay-air_density").html(data["AD"][lang]);
        $("#overlay-wind_power_density").attr("title", data["Wind Power Density"][lang]);
        $("#overlay-wind_power_density").html(data["WPD"][lang]);
        $("#overlay-wind_power_density").attr("title", data["WPD"][lang]);
        $("#overlay-total_precipitable_water").attr("title", data["Total Precipitable Water"][lang]);
        $("#overlay-total_precipitable_water").html(data["TPW"][lang]);
        $("#overlay-total_cloud_water").attr("title", data["Total Cloud Water"][lang]);
        $("#overlay-total_cloud_water").html(data["TCW"][lang]);
        $("#overlay-mean_sea_level_pressure").attr("title", data["Mean Sea Level Pressure"][lang]);
        $("#overlay-mean_sea_level_pressure").html(data["MSLP"][lang]);
        $("#projection-label").html(data["Projection"][lang]);
        $("#azimuthal_equidistant").attr("title", data["Azimuthal Equidistant"][lang]);
        $("#conic_equidistant").attr("title", data["Conic Equidistant"][lang]);
        $("#equirectangular").attr("title", data["Equirectangular"][lang]);
        $("#orthographic").attr("title", data["Orthographic"][lang]);
        $("#stereographic").attr("title", data["Stereographic"][lang]);
        $("#about").html(data["about"][lang]);
    }
};

function getLang() {
    var cod = window.location.href.substr(-2);
    if ((cod != "pt") && (cod != "es") && (cod != "en") && (cod != "ja")) {
        return("pt");
    }
    else
        return cod;
}
