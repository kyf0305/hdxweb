'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1a30ee351d674f08a44d943a1d24e957",
"index.html": "9d93c964edca5a6e062cf63e5abb1995",
"/": "9d93c964edca5a6e062cf63e5abb1995",
"main.dart.js": "f9f5d3b5f662c09ea06edb345431e4b8",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f579d873c7d10d16bb8c4e279c16f2e2",
"assets/images/mine_fabu.png": "7aabcf5cf21a8ef1d092d3666a5c7037",
"assets/images/mine_huifang.png": "ebf732c3cdbb09da168935674c710781",
"assets/images/arrow_right.png": "b6328c7b22cfb884cd521ca841e264c6",
"assets/images/tab_mine_s.png": "fbaec9bd710a1394410eea15debd9ff9",
"assets/images/detail_collect.png": "0a21bbc93d50653a75181f5203c13ee8",
"assets/images/tab_circle.png": "44bc72cc9b5b83ac474260b821c29d09",
"assets/images/tab_dynamic.png": "705ffdcdeabef37745575985c753e298",
"assets/images/mine_daishenhe.png": "af4d9f98766e6f51b2053c148ab503dc",
"assets/images/mine_daicanjia.png": "ae0976374bcb11c9f9695e890e7cfbff",
"assets/images/detail_collect_s.png": "712551a4ac6be47a33604877c7bcf6a8",
"assets/images/tab_search.png": "c1d6382fccc1a3571f790af7cfd885d0",
"assets/images/mine_pub.png": "1694bfd4f1357604ce02e535d647a264",
"assets/images/tab_mine.png": "4a24e7266c4d05f58002a845ebb5d762",
"assets/images/nav_back.png": "c635a5c2073feca11914432e5e52a5aa",
"assets/images/tab_home.png": "8dec663e58ad45085faabe5d0e2e984a",
"assets/images/mine_kecheng.png": "08ce6ccc8118d62a7735bb9057ecf944",
"assets/images/mine_daipingjia.png": "ad3666ab8f05f9e8a2a36d256213f16e",
"assets/images/circle_more_bg.png": "0a61dcbc6cc2381f4a70d5797c7e3f1a",
"assets/images/mine_tuipiao.png": "2f952223ea66e73d48fa15f11be83c3b",
"assets/images/mine_fankui.png": "4373d871b0bdd525d7c565beebcb7361",
"assets/images/mine_job.png": "5b2979b86df69f83285811fbc8b4c22c",
"assets/images/mine_scan.png": "bd368d66d62eebf1d0f58c51c2d715ca",
"assets/images/mine_setting.png": "1b40792cb1b86cb183538b76f379ce81",
"assets/images/tab_circle_s.png": "3a41834fea157269cfc2e72e137d5812",
"assets/images/home_search_icon.png": "196555e15092c41b8c3dc9221fe4023d",
"assets/images/empty_tickets.png": "47c83c712e098e8695df0ba104da03c5",
"assets/images/act_detail_topic_arrow.png": "1ec2aea8d7aedf085f0564426aa13b6a",
"assets/images/detail_arrow_right.png": "b1ebcc16b2a2e85361a8775dc3708f7f",
"assets/images/tab_search_s.png": "d2ae6eb0e9b1037e5a05b3fd513bbae4",
"assets/images/mine_daizhifu.png": "765d985b1062e7250c3e55ecacb98fe4",
"assets/images/mine_edit.png": "85337961ba49edc617957fdd7ad9657d",
"assets/images/mine_fenxiang.png": "71c982137067e5465b14155fad8ceb33",
"assets/images/tab_home_s.png": "c68a7845803691d9f740575a237f7359",
"assets/images/act_detail_topic.png": "c99aa9490bd3ff1193c125d7130c8b87",
"assets/images/tab_dynamic_s.png": "1a5d2165316d50a130b21fcf6dc08118",
"assets/AssetManifest.json": "7fcd9c6ba1124286c948964b20d607f1",
"assets/NOTICES": "4c821e2e3c07583878172de1e2b66dfc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
