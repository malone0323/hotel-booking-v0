import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CalendarCheck, Heart, MapPin, Share2, Star, Wifi } from "lucide-react"

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  // 这里可以根据 ID 获取房间详情，这里使用模拟数据
  const roomDetails = {
    id: params.id,
    title: "豪华海景套房",
    description:
      "享受壮丽的海景和豪华的设施，为您的假期增添难忘的体验。我们的豪华海景套房位于顶层，提供180度无遮挡海景视野，每天都能欣赏到日出和日落的美景。套房内配备高档家具和设施，包括特大号床垫、豪华卫浴用品、私人阳台和休息区。",
    price: 698,
    rating: 4.9,
    reviews: 128,
    location: "三亚·海棠湾",
    host: "张主人",
    hostAvatar: "/placeholder.svg?height=50&width=50",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    amenities: [
      { name: "无线网络", icon: Wifi },
      { name: "空调", icon: Wifi },
      { name: "电视", icon: Wifi },
      { name: "冰箱", icon: Wifi },
      { name: "洗衣机", icon: Wifi },
      { name: "厨房", icon: Wifi },
      { name: "停车位", icon: Wifi },
      { name: "泳池", icon: Wifi },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-green-800">{roomDetails.title}</h1>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{roomDetails.rating}</span>
                  <span className="ml-1 text-gray-500">({roomDetails.reviews} 条评价)</span>
                </div>
                <span>•</span>
                <div className="flex items-center text-gray-500">
                  <MapPin className="mr-1 h-4 w-4 text-green-600" />
                  {roomDetails.location}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                分享
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                收藏
              </Button>
            </div>
          </div>

          {/* 房间图片 */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1 row-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2">
              <Image
                src={roomDetails.images[0] || "/placeholder.svg"}
                alt={roomDetails.title}
                width={800}
                height={600}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            {roomDetails.images.slice(1).map((image, index) => (
              <div key={index} className="col-span-1">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${roomDetails.title} ${index + 1}`}
                  width={400}
                  height={300}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              {/* 房间描述 */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-green-800">房间描述</h2>
                <p className="text-gray-600">{roomDetails.description}</p>
              </div>

              {/* 设施 */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-green-800">设施与服务</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {roomDetails.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <amenity.icon className="h-5 w-5 text-green-600" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 评价 */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-green-800">用户评价</h2>
                  <Link href="#" className="text-sm text-green-600 hover:underline">
                    查看全部 {roomDetails.reviews} 条评价
                  </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {Array(4)
                    .fill(null)
                    .map((_, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-200" />
                            <div>
                              <p className="font-medium">用户{index + 1}</p>
                              <p className="text-xs text-gray-500">2023年10月</p>
                            </div>
                          </div>
                          <div className="mt-2 flex">
                            {Array(5)
                              .fill(null)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                  }`}
                                />
                              ))}
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            房间很干净，设施齐全，位置很好，周边的环境也不错，非常推荐入住。
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* 位置 */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-green-800">位置</h2>
                <div className="h-80 rounded-lg border border-dashed p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-gray-500">地图将在这里显示</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">确切地址会在预订确认后提供。</p>
              </div>
            </div>

            {/* 预订卡片 */}
            <div className="md:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-700">¥{roomDetails.price}</div>
                    <div className="text-sm text-gray-500">每晚</div>
                  </div>
                  <Tabs defaultValue="calendar" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="calendar">日历</TabsTrigger>
                      <TabsTrigger value="details">详情</TabsTrigger>
                    </TabsList>
                    <TabsContent value="calendar" className="mt-4">
                      <Calendar mode="range" className="rounded-md border" />
                    </TabsContent>
                    <TabsContent value="details" className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>¥{roomDetails.price} x 2晚</span>
                          <span>¥{roomDetails.price * 2}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>清洁费</span>
                          <span>¥100</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>服务费</span>
                          <span>¥50</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex items-center justify-between font-bold">
                            <span>总计</span>
                            <span>¥{roomDetails.price * 2 + 150}</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  <Button className="mt-4 w-full bg-green-600 hover:bg-green-700">
                    <CalendarCheck className="mr-2 h-4 w-4" />
                    立即预订
                  </Button>
                  <p className="mt-2 text-center text-xs text-gray-500">您暂不会被收费，预订确认后才会扣款</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
