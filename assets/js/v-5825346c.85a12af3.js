"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[92661],{28671:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-5825346c","path":"/devices/SEA801-Zigbee_SEA802-Zigbee.html","title":"Saswell SEA801-Zigbee/SEA802-Zigbee control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Saswell SEA801-Zigbee/SEA802-Zigbee control via MQTT","description":"Integrate your Saswell SEA801-Zigbee/SEA802-Zigbee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-30T11:31:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery_low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Switch","slug":"switch-1","link":"#switch-1","children":[]},{"level":3,"title":"Heating (binary)","slug":"heating-binary","link":"#heating-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1688577465000},"filePathRelative":"devices/SEA801-Zigbee_SEA802-Zigbee.md"}')},384608:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var i=o(166252);const a=(0,i._)("h1",{id:"saswell-sea801-zigbee-sea802-zigbee",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#saswell-sea801-zigbee-sea802-zigbee","aria-hidden":"true"},"#"),(0,i.Uk)(" Saswell SEA801-Zigbee/SEA802-Zigbee")],-1),l=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"SEA801-Zigbee/SEA802-Zigbee")],-1),c=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Thermostatic radiator valve")],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery_low, switch (state), lock (state), heating, climate (current_heating_setpoint, local_temperature, system_mode, local_temperature_calibration), linkquality")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SEA801-Zigbee-SEA802-Zigbee.jpg",alt:"Saswell SEA801-Zigbee/SEA802-Zigbee"})])],-1),h=(0,i._)("tr",null,[(0,i._)("td",null,"White-label"),(0,i._)("td",null,"HiHome WZB-TRVL, Hama 00176592, RTX ZB-RT1, SETTI+ TRV001")],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),p=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),g=(0,i._)("ul",null,[(0,i._)("li",null,'SEA801-Zigbee (LCD display on the front, several buttons): Long hold the "AUTO/MANU" and "+" Button until the LCD display shows "----"'),(0,i._)("li",null,'SEA802-Z01 (white LED display on the side, rotary plate): Turn the rotary plate to decrease the temperature until the LED dots show "OF", then long press until the display changes to "--"')],-1),b=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),_=(0,i.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="switch-1" tabindex="-1"><a class="header-anchor" href="#switch-1" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>away_mode</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code>, <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="heating-binary" tabindex="-1"><a class="header-anchor" href="#heating-binary" aria-hidden="true">#</a> Heating (binary)</h3><p>Device valve is open or closed (heating or not). Value can be found in the published state on the <code>heating</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> heating is ON, if <code>OFF</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-6</code> and the maximum value is <code>6</code> with a step size of <code>1</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),m={},w=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[l,(0,i._)("tbody",null,[d,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Saswell"},{default:(0,i.w5)((()=>[(0,i.Uk)("Saswell")])),_:1})])]),s,n,r,h])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,p,g,(0,i.kq)(" Notes END: Do not edit below this line "),b,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),_])}]])}}]);