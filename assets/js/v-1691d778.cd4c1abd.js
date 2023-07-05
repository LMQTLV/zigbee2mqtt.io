"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[8633],{956328:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-1691d778","path":"/devices/SNZB-02.html","title":"SONOFF SNZB-02 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF SNZB-02 control via MQTT","description":"Integrate your SONOFF SNZB-02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-07-10T21:03:07.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Troubleshoot","slug":"troubleshoot","link":"#troubleshoot","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1688577465000},"filePathRelative":"devices/SNZB-02.md"}')},97944:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var a=i(166252);const o=(0,a._)("h1",{id:"sonoff-snzb-02",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#sonoff-snzb-02","aria-hidden":"true"},"#"),(0,a.Uk)(" SONOFF SNZB-02")],-1),r=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SNZB-02")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Temperature and humidity sensor")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, temperature, humidity, voltage, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SNZB-02.jpg",alt:"SONOFF SNZB-02"})])],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"White-label"),(0,a._)("td",null,"eWeLink RHK08")],-1),h=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="troubleshoot" tabindex="-1"><a class="header-anchor" href="#troubleshoot" aria-hidden="true">#</a> Troubleshoot</h3><p>In case the sensor got stucked and will not send data anymore, try the following steps to restore it.</p><ol><li>Force remove the device via the frontend</li><li>Restart Zigbee2MQTT</li><li>Re-pair the device</li></ol><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode</p><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery" aria-hidden="true">#</a> Battery</h3><p>Uses a CR2450 battery</p>',8),m=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),b={},f=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[r,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=SONOFF"},{default:(0,a.w5)((()=>[(0,a.Uk)("SONOFF")])),_:1})])]),d,u,s,c])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,a.kq)(" Notes END: Do not edit below this line "),m,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);