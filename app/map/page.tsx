import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Navigation, Search, Star } from "lucide-react"

export default function MapPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6 space-y-2">
            <h1 className="text-3xl font-bold text-green-800">房间位置</h1>
            <p className="text-muted-foreground">查看各民宿位置，了解周边环境和交通情况</p>
          </div>

          <div className="flex gap-4">
            <div className="w-full max-w-xs">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="search" className="text-sm font-medium">
                        搜索位置
                      </label>
                      <div className="flex items-center gap-2">
                        <Input id="search" placeholder="输入地址或民宿名称" />
                        <Button size="icon" className="bg-green-600 hover:bg-green-700">
                          <Search className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">热门城市</h3>
                      <div className="flex flex-wrap gap-2">
                        {["北京", "上海", "广州", "深圳", "杭州", "成都"].map((city) => (
                          <Button key={city} variant="outline" size="sm" className="h-8">
                            {city}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">附近民宿</h3>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <Card key={item} className="overflow-hidden">
                            <div className="grid grid-cols-[80px_1fr] gap-3">
                              <img
                                src="/placeholder.svg?height=80&width=80"
                                alt="民宿图片"
                                className="h-20 w-20 object-cover"
                              />
                              <div className="py-2 pr-2">
                                <h4 className="text-sm font-medium line-clamp-1">豪华海景套房 {item}</h4>
                                <div className="mt-1 flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span className="text-xs text-gray-500">4.9 ({item * 10}条评价)</span>
                                </div>
                                <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                                  <MapPin className="h-3 w-3 text-green-600" />
                                  <span className="line-clamp-1">距离您{item * 0.5}公里</span>
                                </div>
                                <div className="mt-1 text-sm font-bold text-green-700">¥{item * 100 + 98}</div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <Card className="h-[calc(100vh-16rem)]">
                <Tabs defaultValue="map">
                  <div className="flex items-center justify-between border-b px-4 py-2">
                    <TabsList>
                      <TabsTrigger value="map">地图</TabsTrigger>
                      <TabsTrigger value="satellite">卫星</TabsTrigger>
                    </TabsList>
                    <Button variant="outline" size="sm" className="h-8">
                      <Navigation className="mr-1 h-4 w-4" />
                      定位
                    </Button>
                  </div>
                  <TabsContent value="map" className="h-full">
                    <div className="flex h-full items-center justify-center border border-dashed">
                      <div className="text-center">
                        <p className="text-muted-foreground">地图将在这里显示</p>
                        <p className="text-xs text-muted-foreground">
                          (在实际应用中将集成地图服务，如高德地图、百度地图等)
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="satellite" className="h-full">
                    <div className="flex h-full items-center justify-center border border-dashed">
                      <div className="text-center">
                        <p className="text-muted-foreground">卫星图将在这里显示</p>
                        <p className="text-xs text-muted-foreground">
                          (在实际应用中将集成地图服务，如高德地图、百度地图等)
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
