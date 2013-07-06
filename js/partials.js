angular.module('partials', [])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/about.html', [
'<div class="about"><h1>Welcome to g0v Hackfoldr</h1><p>g0v hackfoldr 是你的黑客公事包，用一個網址就可以和夥伴們分享所有的專案文件！ :D</p><h2>為你的 g0v 專案製作 hackfoldr</h2><h3>建立 hackfoldr</h3><ol><li>想好專案英文網址名稱（例如：g0v.tw-hackfoldr）</li><li>在瀏覽器網址列輸入「hack.g0v.tw/(你的專案的英文網址名稱)」</li></ol><p>恭喜！你已經建立自己的 hackfoldr 了！</p><h3>自訂 hackfoldr</h3><ol><li>點左上 home 圖案旁文字連結，會自動在新分頁打開 ethercalc</li><li>在 B1 格子中輸入本 hackfoldr 名稱（通常是中文）</li><li>在 B2 格子中輸入第一份文件名稱，A2 格子中輸入第一份文件網址</li><li>以此類推，把所有文件的顯示名稱和網址都輸入進去</li><li>切回「hack.g0v.tw/(你的專案的英文網址名稱)」這個瀏覽器分頁</li><li>按 home 圖示旁的 ↺ 按鈕，或者 F5 / Ctrl + R 重新整理頁面 </li></ol><p>恭喜！你已經打造出屬於自己的 hackfoldr 了！</p><p>註：使用 ethercalc 不需登入，編輯後即自動存檔。如果想修改 ethercalc 試算表的名稱，直接開新的 etherclac.org 網址後，將舊試算表的內容剪貼過來即可。</p><h3>最後...</h3><ol><li>到該次黑客松的相關文件中，分享你的 hackfoldr 網址</li><li>start social hacking! :D</li></ol><h2>關於</h2><h3>g0v hackfoldr</h3><p>g0v hackfoldr 是經過客製的 hackfoldr，它能夠：</p><ul><li>囊括相關網址<ul><li>把參加 g0v 黑客松所需的連結，整合在導覽列中，讓你隨時取用</li><li>用 etherclac.org 試算表，設定你的文件清單</li></ul></li><li>預覽文件<ul><li>在預覽窗格中直接打開 hackpad 或 google docs</li><li>打開 google docs 時預設為非編輯模式，避免編輯者過多時產生的問題</li><li>點擊文件清單的空白處或邊緣，可以收合側邊欄，擁有更多空間 </li></ul></li><li>登錄自己<ul><li>Hub 簽到處可以用現成的 Github / Twitter / Facebook 帳號登入 g0v，或者也可以用 email 登入 g0v</li><li>登入後別忘了替自己貼標籤，讓大家知道什麼樣的專案可以找上你</li><li>如果打算參加某次黑客松，記得加上當次黑客松的標籤（例如：「hackath3n」），讓大家知道你會出現，實體或遠距都可以</li></ul></li><li>與同好交流<ul><li>在黑客列表右上方的搜尋框輸入關鍵字，即可馬上找到趣味相投的人</li><li>點選任一個標籤，除了可以列出擁有同樣標籤的人之外，同時可以進入該標籤的 disqus 討論區，和同好們交流意見</li></ul></li></ul><p>g0v hackfoldr 當然也是開源專案，原始碼在 <a href="https://github.com/g0v/hack.g0v.tw">github</a></p><h3>hackfoldr</h3><p>hackfoldr 是 clkao 為了 g0v 黑客松活動而開發的開源專案，原始碼也在 <a href="https://github.com/hackfoldr/hackfoldr">github</a></p></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/authz.html', [
'<div class="h1">authz request</div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/hack.html', [
'<div resize="resize" ng-cloak="ng-cloak" class="hackfolder"><div ng-class="{collapsed: collapsed}" ng-click="collapsed=!collapsed" ng-style="{height: contentHeight}" class="index"><div class="hackid"><i class="icon-home"></i>&nbsp;<a ng-href="http://ethercalc.org/{{hackId}}" target="_blank" ngx-final="ngx-final" class="indexlink expanded-content">{{HackFolder.folderTitle || hackId}} </a><small><a ng-click="reload(hackId)" ngx-noclick="ngx-noclick" class="reload">&#x21BA;</a></small></div><ul ui-sortable="sortableOptions" ng-model="tree"><li ng-repeat="doc in tree" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active: doc.id == docId}"><div ng-include="\'/partials/hackitem.html\'" class="entry"></div><ul ng-show="doc.children &amp;&amp; doc.expand" ui-sortable="sortableOptions" ng-model="doc.children" ng-animate="\'fade\'"><li ng-repeat="doc in doc.children" ng-title="{{doc.title || doc.id}}" ngx-noclick="ngx-noclick" ng-class="{active: doc.id == docId}"><div ng-include="\'/partials/hackitem.html\'" class="entry"></div></li></ul></li></ul></div><div ng-style="{height: contentHeight}" class="pad-container"><article ng-repeat="(key, iframe) in iframes" ng-show="docId == key" class="pad"><span ng-show="hasViewMode(iframe.doc.type) &amp;&amp; iframe.mode != \'edit\'" ng-click="activate(iframe.doc.id, true)" class="docmode">edit</span><div ui-if="iframe.doc.iframeunsure" class="noiframe unsure">Click the link below to open the link in a new window: <br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span><div ng-click="iframe.doc.iframeunsure = false" class="icon icon-close">&#x274c;</div></div><div ui-if="iframe.doc.noiframe" class="noiframe">It looks like this site blocks embedding.  Click the link below to open it in a new window: <br/><span class="link"><img ng-src="{{iframe.doc.icon}}" title="{{iframe.doc.title || iframe.doc.id}}"/><a ng-href="{{iframe.src}}" target="{{iframe.doc.id}}">{{iframe.src}}</a></span></div><iframe ng-show="!iframe.doc.noiframe" ng-src="{{iframe.src}}" ngx-iframe="iframeCallback(iframe.doc)" class="embed"></iframe></article></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/hackitem.html', [
'<span ui-if="doc.type == \'dummy\'" ng-click="doc.expand=!doc.expand" class="link"><img src="/img/folder.png" tooltip="{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}" tooltip-placement="right"/><span class="expanded-content">{{doc.title || doc.id}}</span></span><a ng-click="godoc(doc)" ngx-click-meta="open(doc)" ngx-final="ngx-final" ui-if="doc.type != \'dummy\'" class="link"><img ng-src="{{doc.icon}}" tooltip="{{ {\'true\': (doc.title || doc.id), \'false\': \'\'}[!!collapsed] }}" tooltip-placement="right"/><span class="expanded-content">{{doc.title || doc.id}}</span><span ng-repeat="tag in doc.tags" class="label label-{{tag.class}}">{{tag.content}}</span></a><span ui-if="doc.children" ng-class="{collapsed: !doc.expand}" ng-click="doc.expand=!doc.expand" class="collapser">{{ {"true": "&#x25B8;", "false": "&#x25BE;"}[!doc.expand] }}</span>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/irc.html', [
'<iframe ui-if="ircEnabled" ng-show="$state.current.name == \'irc\'" ng-src="https://kiwiirc.com/client/irc.freenode.net/?&amp;theme=cli#g0v.tw"></iframe><iframe ui-if="irclogEnabled" ng-show="$state.current.name == \'irc.log\'" ng-src="http://logbot.g0v.tw/channel/g0v.tw/today"></iframe>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/nav.html', [
'<ul class="nav"><li><a ng-href="/">首頁</a></li><li class="dropdown-split-left"><a ng-href="/g0v-hackath3n">客廳工廠黑客松</a></li><li class="dropdown-split-right dropdown"><a class="dropdown-toggle"><i class="icon-caret-down"></i></a><ul role="menu" aria-labelledby="projects" class="dropdown-menu pull-right"><li><a ng-href="/g0v-hackath2n">九大建設</a></li><li><a href="https://hackpad.com/lIoCjaeMWzC">公地放領</a></li><li><a href="https://hackpad.com/ul6fMthof2S">動員戡亂</a></li></ul></li><li class="dropdown"><a class="dropdown-toggle">長期專案</a><ul role="menu" aria-labelledby="projects" class="dropdown-menu"><li role="presentation"><a role="menuitem" tabindex="-1" ng-href="/meta">基礎建設</a></li><li role="presentation"><a role="menuitem" tabindex="-1" ng-href="/g0v-ly">立法院專案</a></li><li role="presentation"><a role="menuitem" tabindex="-1" ng-href="/g0vwelfare">福利請聽</a></li><li role="presentation"><a role="menuitem" tabindex="-1" ng-href="/kuansim">鄉民關心你</a></li></ul></li><li><a ng-href="/people">Hub<span class="label label-info">簽到處</span></a></li><li ng-class="{ active: $state.includes(\'irc\') }" class="dropdown-split-left"><a ng-href="/irc">聊天室</a></li><li ng-class="{ active: $state.includes(\'irc\') }" class="dropdown-split-right dropdown"><a class="dropdown-toggle"><i class="icon-caret-down"></i></a><ul role="menu" aria-labelledby="irc" class="dropdown-menu pull-right"><li><a ng-href="/irc/log">紀錄</a></li></ul></li></ul><ul class="nav pull-right"><li ng-class="{ active: $state.includes(\'about\') }"><a ng-href="/about">About</a></li></ul>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/people.html', [
'<div ng-cloak="ng-cloak" class="row people people-layout"><div id="left-block" class="span4"><div ng-show="user" class="self"><h2 class="displayName">{{user.displayName}}</h2><!--.name {{user.username}}--><img ng-src="{{ user.avatar }}?size=large" width="210" class="img-polaroid m-top-1"/><form class="m-top-1"><fieldset><label>關鍵字</label><span ng-repeat="tag in user.tags" ng-click="gotag(tag)" ng-mouseenter="toremove=1" ng-mouseleave="toremove=0" class="label tag">{{tag}}<a ng-show="toremove" ng-click="remove_tag(user, tag)"><i class="icon-remove"></i></a></span><div class="input-append m-top-p1"><input ng-model="newtag" class="tag"/><button type="submit" ng-click="add_tag(user)" class="btn">新增關鍵字</button></div><label>自我介紹</label><textarea id="bio-input" ng-model="user.bio"></textarea></fieldset></form><h4>連結帳號</h4><ul class="services unstyled"><li ng-repeat="provider in [\'facebook\', \'twitter\', \'github\']" class="m-bottom-1"><a ng-href="http://{{provider}}.com/{{user.auth[provider].username}}" ng-show="user.auth[provider]" class="btn btn-block btn-primary disabled"><i class="icon-{{provider}}"></i>&nbsp; {{user.auth[provider].username}}</a><a ng-click="loginAndLink(provider)" ng-show="!user.auth[provider]" class="btn btn-block"><i class="icon-{{provider}}"></i>&nbsp; {{provider}}</a></li></ul></div><div ng-show="toSetUsername" class="set-username m-top-1"><h4>設定 G0V 使用者名稱</h4><form class="m-top-1"><fieldset><div class="input-append"><input id="set-username-input" ng-model="newUsername"/><button type="submit" ng-click="setUsername(newUsername)" class="btn">設定</button></div></fieldset></form><div ng-show="usernameInUse" class="alert alert-error">已有 G0V 成員使用此名稱，請選擇其他使用者名稱<ul><li ng-repeat="(provider, auth) in usernameInUse.auth"><a ng-click="loginAndMerge(provider)" class="btn"><i class="icon-{{provider}}"></i>&nbsp; {{provider}}:{{auth.username}}</a></li></ul></div></div><div id="login-block" ng-show="!user &amp;&amp; !toSetUsername" class="p-all-p1"><h3>登入 G0V</h3><div class="well"><button type="button" ng-click="auth.login(\'facebook\', { rememberMe: true, scope: \'email,user_likes\' })" class="btn btn-block"><i class="icon-facebook icon-large"></i>&nbsp; 使用 facebook 登入</button><button type="button" ng-click="auth.login(\'github\', { rememberMe: true })" class="btn btn-block"><i class="icon-github icon-large"></i>&nbsp; 使用 github 登入</button><button type="button" ng-click="auth.login(\'persona\', { rememberMe: true })" class="btn btn-block"><i class="icon-envelope icon-large"></i>&nbsp; 使用 Email 登入</button></div></div><div id="logout-block" ng-show="user || toSetUsername" class="p-all-p1"><p><button id="logout-link" ng-click="auth.logout()" class="btn btn-block">登出 G0V</button></p></div></div><div id="right-block" class="span8 p-all-p1"><form class="form-search"><div class="m-top-1"></div><input ng-model="search" placeholder="Filter by tag..." class="search-query"/></form><div class="taglist row"><span ng-repeat="entry in tagcloud" class="label"><span ng-click="$parent.search = entry.tag" ng-mouseenter="toadd=1" ng-mouseleave="toadd=0" class="tag"><i ng-class="{transparent: !toadd}" ng-click="add_tag(user, entry.tag)" ngx-final="ngx-final" class="icon-plus"></i>{{entry.tag}}<span class="badge badge-info font-se">{{entry.count}}</span></span></span><span style="-webkit-flex:100 1 auto">&nbsp;</span></div><div class="people-list"><div ng-class="{\'show-detail\': showPerson == person}" ng-repeat="person in people | filter:search" ng-click="togglePerson(person)" class="person"><div ng-mouseenter="tofollow=1" ng-mouseleave="tofollow=0" class="avatar"><img ng-src="{{person.avatar}}?size=medium" class="img-polaroid"/><i ng-show="followlist[person.$id]" ng-click="unfollow_person(person.$id)" ngx-final="ngx-final" class="icon-star-empty"></i><i ng-show="followlist[person.$id] || tofollow" ng-click="follow_person(person.$id)" ngx-final="ngx-final" class="icon-star"></i></div><div style="font-size:13px;" class="person-name">{{person.$id}}</div><div ng-show="person == showPerson" class="person-detail"><div class="person-tag"><span ng-repeat="tag in person.tags" ng-class="{ \'label-success\': tag == \'hackath3n\' }" ng-click="gotag(tag)" class="label tag">{{tag}}</span></div><div ng-class="{\'person-bio-empty\': !person.bio}" class="person-bio">{{person.bio || "( 尚未填好自我介紹 )"}}</div></div></div></div></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/project.html', [
'<div ng-switch="!!project" ng-cloak="ng-cloak" class="row tag-content"><div class="span4"><h3>專案</h3><a ng-click="newProject()" class="btn">New</a><ul><li ng-repeat="project in projects"><a ng-href="/project/{{project.name}}" class="link">{{project.name}}</a></li></ul><h3>關注</h3><ul><!--li(ng-repeat="person in people | filter:tag")<div ng-class="{{person.status}}" class="person"><div class="name">{{person.username}}</div><img ng-src="{{person.avatar}}?size=small"/><span ng-repeat="tag in person.tags" ng-class="{ \'label-success\': tag == \'hackath3n\' }" ng-click="go(\'/tag/{{tag}}\')" class="label tag">{{tag}}</span></div>--></ul></div><div ng-switch-when="true" class="span8"><h2>專案 {{project.name}}</h2><div ui-if="opts.editMode" ng-include="\'/partials/project.edit.html\'"></div><div ui-if="!opts.editMode"><a ng-click="opts.editMode=1" class="btn">Edit</a><div ng-bind="project[\'name\']" class="name"></div><div ng-bind="project[\'name-zh\']" class="name-zh"></div><div ng-bind="project[\'description-zh\']" class="description-zh"></div><label>關鍵字</label><span ng-click="go(\'/tag/{{tag}}\')" ng-repeat="tag in project.keywords" ng-mouseenter="toremove=1" ng-mouseleave="toremove=0" class="label tag"> ',
'{{tag}}<a ng-show="toremove" ng-click="remove_tag(project, tag)"><i class="icon-remove"></i></a></span></div></div><div ng-switch-default="ng-switch-default" class="span8"><h2>專案 {{ project | json }}</h2><form class="form-search"><div class="m-top-1"></div><input ng-model="search" placeholder="Filter by tag..." class="search-query"/></form><ul><li ng-repeat="project in projects | filter:{keywords: tag}"><div ng-class="{{project.status}}" class="project"><div class="name">{{ project.name }}<div class="zh">{{ project[\'name-zh\'] }}</div></div><span ng-repeat="tag in project.keywords" ng-click="go(\'/tag/{{tag}}\')" class="label tag">{{tag}}</span></div></li></ul></div></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/project.edit.html', [
'<div ui-if="!opts.isnew"><h3>editing</h3><a ng-click="opts.editMode=0" class="btn">Done</a></div><div><h3 ng-if="opts.isnew">新增專案</h3><form class="m-top-1"><fieldset ui-if="opts.isnew"><label>代號</label><input ng-model="project[\'name\']" class="name"/><span class="help-block">英文及數字</span></fieldset><fieldset ui-if="!opts.isnew"><label>代號</label><div ng-bind="project[\'name\']" class="name"></div></fieldset><fieldset><label>名稱<input ng-model="project[\'name-zh\']" class="name"/></label><label>關鍵字</label><span ng-repeat="tag in project.keywords" ng-mouseenter="toremove=1" ng-mouseleave="toremove=0" class="label tag"> ',
'{{tag}}<a ng-show="toremove" ng-click="remove_tag(project, tag)"><i class="icon-remove"></i></a></span><div class="input-append m-top-p1"><input ng-model="opts.newtag" class="tag span2"/><button type="submit" ng-click="add_tag(project)" class="btn">Add</button></div><label>說明</label><textarea ng-model="project[\'description-zh\']"></textarea></fieldset><fieldset ng-show="opts.isnew"><input type="submit" value="新增" ng-click="saveNew(project)"/></fieldset></form></div>',''].join("\n"));
}])
.run(['$templateCache', function($templateCache) {
  return $templateCache.put('/partials/tag.html', [
'<div ng-cloak="ng-cloak" class="row tag-content"><div id="left-block" class="span4"><div class="p-all-p1"><h3>專案<ul><li ng-click="go(\'/project/{{project.name}}\')" ng-repeat="project in projects | filter:{keywords: tag}"><div class="name">{{project[\'name-zh\'] || project.name }}</div></li></ul></h3><h3>人群<ul><li ng-repeat="person in people | filter:{tags: tag}"><div ng-class="{{person.status}}" style="width:100%;" class="person"><div class="row fix-m-left"><img ng-src="{{person.avatar}}?size=medium" class="img-polaroid"/><div style="display:inline-block;font-size:20px;padding:15px 0;font-family:Century Gothic" class="name">{{person.username}}</div><br/><button ng-click="toggle_tag($event)" class="btn m-top-1">關鍵字</button></div><div class="row m-top-p1 fix-m-left hide"><span ng-repeat="tag in person.tags" ng-class="{ \'label-success\': tag == \'hackath3n\' }" ng-click="gotag(tag)" class="label tag">{{tag}}</span></div></div></li></ul></h3></div></div><div id="right-block" class="span8 p-all-p1"><div class="p-all-p1"><h3>關於 {{ tag }}</h3><div class="back-link"><a href="/people">回到 Hub</a></div><div id="disqus_thread" class="content-panel-content"></div></div></div></div>',''].join("\n"));
}]);