import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HotelCard } from "@/components/hotel-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search } from "lucide-react"

// 模拟房间数据
const rooms = [
  {
    id: 1,
    title: "豪华海景套房",
    description: "享受壮丽的海景和豪华的设施，为您的假期增添难忘的体验。",
    price: 698,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600",
    location: "三亚·海棠湾",
  },
  {
    id: 2,
    title: "现代都市公寓",
    description: "位于市中心的现代化公寓，紧邻购物和娱乐区。",
    price: 458,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    location: "上海·静安区",
  },
  {
    id: 3,
    title: "古典庭院民宿",
    description: "体验传统文化与现代便利设施完美结合的庭院式民宿。",
    price: 528,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600",
    location: "丽江·古城区",
  },
  {
    id: 4,
    title: "山景度假别墅",
    description: "被青山环绕的度假别墅，享受宁静的自然环境和舒适的住宿体验。",
    price: 888,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600",
    location: "杭州·西湖区",
  },
  {
    id: 5,
    title: "工业风格单身公寓",
    description: "现代工业风格的单身公寓，时尚简约，适合商务旅行。",
    price: 358,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=600",
    location: "北京·朝阳区",
  },
  {
    id: 6,
    title: "日式简约民宿",
    description: "简约日式风格，提供安静舒适的住宿环境，适合休闲度假。",
    price: 428,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    location: "苏州·姑苏区",
  },
]

export default function RoomsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="mb-6 text-3xl font-bold text-green-800">浏览房间</h1>

          <div className="grid gap-6 md:grid-cols-[300px_1fr]">
            {/* 筛选侧边栏 */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">搜索</h3>
                    <div className="flex items-center gap-2">
                      <Input placeholder="输入关键词" />
                      <Button size="icon" className="bg-green-600 hover:bg-green-700">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">价格范围</h3>
                    <Slider defaultValue={[500]} max={2000} step={100} />
                    <div className="flex items-center justify-between text-sm">
                      <span>¥0</span>
                      <span>¥500</span>
                      <span>¥2000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">房间类型</h3>
                    <div className="space-y-2">
                      {["单人间", "双人间", "家庭套房", "豪华套房"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`type-${type}`} />
                          <Label htmlFor={`type-${type}`} className="text-sm">
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">设施</h3>
                    <div className="space-y-2">
                      {["无线网络", "空调", "电视", "冰箱", "洗衣机", "厨房", "停车位"].map((facility) => (
                        <div key={facility} className="flex items-center space-x-2">
                          <Checkbox id={`facility-${facility}`} />
                          <Label htmlFor={`facility-${facility}`} className="text-sm">
                            {facility}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 房间列表 */}
            <div className="space-y-6">
              <Tabs defaultValue="grid">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">共找到 {rooms.length} 个房间</span>
                  </div>
                  <TabsList>
                    <TabsTrigger value="grid">网格视图</TabsTrigger>
                    <TabsTrigger value="list">列表视图</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="grid" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room) => (
                      <HotelCard
                        key={room.id}
                        title={room.title}
                        description={room.description}
                        price={room.price}
                        rating={room.rating}
                        image={room.image}
                        location={room.location}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="list" className="mt-6">
                  <div className="space-y-4">
                    {rooms.map((room) => (
                      <Card key={room.id} className="overflow-hidden">
                        <div className="grid md:grid-cols-[250px_1fr]">
                          <img
                            src={room.image || "/placeholder.svg"}
                            alt={room.title}
                            className="h-48 w-full object-cover md:h-full"
                          />
                          <div className="p-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg">{room.title}</h3>
                                <div className="text-lg font-bold text-green-700">¥{room.price}/晚</div>
                              </div>
                              <p className="text-sm text-gray-500">{room.location}</p>
                              <p className="text-sm text-gray-600">{room.description}</p>
                              <div className="flex justify-end">
                                <Button className="bg-green-600 hover:bg-green-700">查看详情</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
