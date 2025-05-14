import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, MapPin, Star } from "lucide-react"

// 模拟收藏数据
const favorites = [
  {
    id: 1,
    title: "豪华海景套房",
    description: "享受壮丽的海景和豪华的设施，为您的假期增添难忘的体验。",
    price: 698,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600",
    location: "三亚·海棠湾",
    date: "2023-10-15",
  },
  {
    id: 2,
    title: "现代都市公寓",
    description: "位于市中心的现代化公寓，紧邻购物和娱乐区。",
    price: 458,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    location: "上海·静安区",
    date: "2023-10-10",
  },
  {
    id: 3,
    title: "古典庭院民宿",
    description: "体验传统文化与现代便利设施完美结合的庭院式民宿。",
    price: 528,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600",
    location: "丽江·古城区",
    date: "2023-09-28",
  },
  {
    id: 4,
    title: "山景度假别墅",
    description: "被青山环绕的度假别墅，享受宁静的自然环境和舒适的住宿体验。",
    price: 888,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600",
    location: "杭州·西湖区",
    date: "2023-09-20",
  },
  {
    id: 5,
    title: "日式简约民宿",
    description: "简约日式风格，提供安静舒适的住宿环境，适合休闲度假。",
    price: 428,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    location: "苏州·姑苏区",
    date: "2023-09-15",
  },
]

export default function FavoritesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-green-800">我的收藏</h1>
              <p className="text-muted-foreground">管理您收藏的房间，随时查看并预订</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link href="/rooms">
                <Button className="bg-green-600 hover:bg-green-700">浏览更多房间</Button>
              </Link>
            </div>
          </div>

          <Tabs defaultValue="grid" className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-sm text-gray-500">共 {favorites.length} 个收藏</span>
              </div>
              <TabsList className="mt-4 sm:mt-0">
                <TabsTrigger value="grid">网格视图</TabsTrigger>
                <TabsTrigger value="list">列表视图</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="grid" className="mt-6">
              {favorites.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {favorites.map((room) => (
                    <Card key={room.id} className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative">
                        <img
                          src={room.image || "/placeholder.svg"}
                          alt={room.title}
                          className="h-48 w-full object-cover"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 rounded-full bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                        >
                          <Heart className="h-5 w-5 fill-red-500" />
                          <span className="sr-only">取消收藏</span>
                        </Button>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">{room.title}</h3>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="ml-1 text-sm">{room.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="mr-1 h-4 w-4 text-green-600" />
                            {room.location}
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2">{room.description}</p>
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-end">
                              <span className="text-xl font-bold text-green-700">¥{room.price}</span>
                              <span className="text-sm text-gray-500">/晚</span>
                            </div>
                            <Link href={`/rooms/${room.id}`}>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                查看详情
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed">
                  <Heart className="h-12 w-12 text-gray-300" />
                  <h3 className="mt-4 text-lg font-medium">暂无收藏</h3>
                  <p className="mt-2 text-sm text-gray-500">浏览房间并添加到您的收藏夹</p>
                  <Link href="/rooms" className="mt-4">
                    <Button className="bg-green-600 hover:bg-green-700">浏览房间</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="list" className="mt-6">
              {favorites.length > 0 ? (
                <div className="space-y-4">
                  {favorites.map((room) => (
                    <Card key={room.id} className="overflow-hidden">
                      <div className="grid md:grid-cols-[250px_1fr]">
                        <div className="relative">
                          <img
                            src={room.image || "/placeholder.svg"}
                            alt={room.title}
                            className="h-48 w-full object-cover md:h-full"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 rounded-full bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                          >
                            <Heart className="h-5 w-5 fill-red-500" />
                            <span className="sr-only">取消收藏</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-lg">{room.title}</h3>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="ml-1 text-sm">{room.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="mr-1 h-4 w-4 text-green-600" />
                              {room.location}
                            </div>
                            <p className="text-sm text-gray-600">{room.description}</p>
                            <div className="text-xs text-gray-500">收藏于: {room.date}</div>
                            <div className="flex items-center justify-between pt-2">
                              <div className="text-xl font-bold text-green-700">¥{room.price}/晚</div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Heart className="mr-2 h-4 w-4 fill-red-500 text-red-500" />
                                  取消收藏
                                </Button>
                                <Link href={`/rooms/${room.id}`}>
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    查看详情
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed">
                  <Heart className="h-12 w-12 text-gray-300" />
                  <h3 className="mt-4 text-lg font-medium">暂无收藏</h3>
                  <p className="mt-2 text-sm text-gray-500">浏览房间并添加到您的收藏夹</p>
                  <Link href="/rooms" className="mt-4">
                    <Button className="bg-green-600 hover:bg-green-700">浏览房间</Button>
                  </Link>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
