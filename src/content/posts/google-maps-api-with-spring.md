---
title: 'Google Maps APIをSpringで使ってみる'
summary: ''
categories: ['tech']
tags: ['java','kotlin','spring','google-maps']
publishedAt: 2020-04-05T14:43:00.000Z
modifiedAt: 
draft: false
isHtml: true
microCMSId: 'google-maps-api-with-spring'
microCMSCreatedAt: 2021-03-20T14:57:30.194Z
microCMSUpdatedAt: 2021-03-20T14:57:30.194Z
microCMSRevisedAt: 2021-03-20T14:57:30.194Z
---
<p>Google Mapsの場所情報が使えるPlaces APIを使ったアプリケーションを作ってみたく、実装ためしたメモ。</p>
<h2 id="google-maps-api">Google Maps API</h2>
<p>単にGoogle Maps APIといってもその用途によって、ドキュメントや料金体系が別れている。</p>
<p>ドキュメント一覧はここで、目的に合ったAPIを選ぶ。
<a href="https://developers.google.com/maps/documentation">https://developers.google.com/maps/documentation</a></p>
<p>料金についてはここ。記事を書いている時点で、モバイル向けマップ表示は無料だったり、ある道路の制限速度を取得するAPIは1000件あたり$20と細かい。1ヶ月$200までは無料で使える。<br><a href="https://cloud.google.com/maps-platform/pricing/">https://cloud.google.com/maps-platform/pricing/</a></p>
<p>今回は<a href="https://developers.google.com/places/web-service/intro">Places API for Web</a>を使ってみる。指定した場所周辺の飲食店一覧や、その飲食店のレビュー情報なんかが取得できる。</p>
<p>Places APIの中でも、場所を探す、場所の詳細情報を取得する、その周辺の写真を取得する、で料金体系が違うので注意。</p>
<h2 id="apiの有効化">APIの有効化</h2>
<p>ここに書いてあるとおり順にやってく。<br><a href="https://developers.google.com/places/web-service/get-api-key">https://developers.google.com/places/web-service/get-api-key</a></p>
<p>手順通り進めたら、API Keyが発行できる。このキーをクエリパラメータに含めるなどして扱う。</p>
<p>発行できたらcurlつかってテスト。</p>


```bash
curl "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key={replace your API Key}&location=35.6812362,139.7649361&radius=100&language=ja&keyword=ramen"

```


<p>上記は<a href="https://developers.google.com/places/web-service/search#PlaceSearchRequests">Nearby Search</a>を使って、東京駅周辺半径100mで、キーワード&quot;ramen&quot;でお店を探すサンプル。</p>
<p>ドキュメントに書かれているとおり、API Keyには利用元の制限をかけるべき。IPアドレスやリファラなどで設定可能。</p>
<h2 id="実装">実装</h2>
<p>Java向け公式のクライアントがあったのでそれ利用。</p>
<p><a href="https://github.com/googlemaps/google-maps-services-java">https://github.com/googlemaps/google-maps-services-java</a></p>
<p>依存を追加。</p>


```kotlin
// build.gradle.kts
dependencies {
    implementation("com.google.maps:google-maps-services:0.11.0")
}

```


<p>使い方は次のような感じ。</p>


```java
// https://github.com/googlemaps/google-maps-services-java/blob/master/README.md より
GeoApiContext context = new GeoApiContext.Builder()
    .apiKey("AIza...")
    .build();
GeocodingResult[] results =  GeocodingApi.geocode(context,
    "1600 Amphitheatre Parkway Mountain View, CA 94043").await();
Gson gson = new GsonBuilder().setPrettyPrinting().create();
System.out.println(gson.toJson(results[0].addressComponents));

```


<p><code>GeoApiContext</code>にAPI Keyを詰めてインスタンス化、それを<code>GeocodingApi.geocode()</code>といったstatic methodの引数に詰めて実行できる。</p>
<p>Springで実装するとき、このcontextをどう扱えばよいか。やっぱりDIしてしまうのが後々別のクラスでもAPI呼び出したいってとき便利なので、Bean登録する。</p>


```kotlin
@Configuration
class GeoApiConfig {
    @Bean
    fun createGeoApiConfig(@Value("\${google.api.api-key}") apiKey: String): GeoApiContext {
        return GeoApiContext.Builder()
                .apiKey(apiKey)
                .build()
    }
}

```


<p>application.ymlやコマンドライン引数などで<code>google.api.api-key</code>を設定しておくこと。</p>
<p>そして実際に使うところはこのような感じ。Kotlinだと<code>@Autowired</code>を省略できたりする。</p>


```kotlin
@Service
class PlaceApiService(private val context: GeoApiContext) {

    companion object {
        const val langCode = "ja"
    }

    override fun getLocationFromKeyword(keyword: String): PlacesSearchResponse {
        val request = PlacesApi
                .textSearchQuery(context, keyword)
                .language(langCode)
        try {
            return request.await()
        } catch (e: Exception) {
            throw RuntimeException("Some error occured.")
        }
    }
}

```


<p>勿論エラーハンドリングはもう少し考えたほうなおよし。</p>
<h2 id="まとめ">まとめ</h2>
<p>Spring向けってわけではないJavaライブラリを扱うとき、うまくBean登録してあげるのが肝かなーと思った次第です。</p>

    