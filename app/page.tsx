import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { HotelCard } from "@/components/hotel-card"
import { MapPin, Search, Star, UserRound } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-r from-green-50 to-green-100 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-green-900 sm:text-5xl">
                    寻找您完美的住宿体验
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    探索高品质民宿，享受宾至如归的温馨感受，轻松预订您的理想房间。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/rooms"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    浏览房间
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    了解更多
                  </Link>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Tabs defaultValue="search" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="search">搜索房间</TabsTrigger>
                        <TabsTrigger value="map">地图查看</TabsTrigger>
                      </TabsList>
                      <TabsContent value="search" className="mt-4 space-y-4">
                        <div className="grid gap-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-green-600" />
                            <Input placeholder="目的地或酒店名称" className="flex-1" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="mb-2 text-sm font-medium">入住日期</p>
                              <Calendar mode="single" className="rounded-md border" />
                            </div>
                            <div>
                              <p className="mb-2 text-sm font-medium">退房日期</p>
                              <Calendar mode="single" className="rounded-md border" />
                            </div>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700">
                            <Search className="mr-2 h-4 w-4" /> 搜索可用房间
                          </Button>
                        </div>
                      </TabsContent>
                      <TabsContent value="map" className="h-[400px] mt-4">
                        <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                          <p className="text-sm text-muted-foreground">地图功能将在这里显示</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Rooms Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-green-800 sm:text-5xl">精选房间</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  探索我们的热门房间，享受舒适住宿体验
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <HotelCard
                title="豪华海景套房"
                description="享受壮丽的海景和豪华的设施，为您的假期增添难忘的体验。"
                price={698}
                rating={4.9}
                image="/placeholder.svg?height=400&width=600"
                location="三亚·海棠湾"
              />
              <HotelCard
                title="现代都市公寓"
                description="位于市中心的现代化公寓，紧邻购物和娱乐区。"
                price={458}
                rating={4.7}
                image="/placeholder.svg?height=400&width=600"
                location="上海·静安区"
              />
              <HotelCard
                title="古典庭院民宿"
                description="体验传统文化与现代便利设施完美结合的庭院式民宿。"
                price={528}
                rating={4.8}
                image="/placeholder.svg?height=400&width=600"
                location="丽江·古城区"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href="/rooms"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                查看全部房间
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-green-50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-green-800 sm:text-5xl">我们的特色服务</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我们提供全方位的服务，确保您的住宿体验舒适无忧
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">积分奖励</h3>
                  <p className="text-center text-sm text-gray-500">通过分享和预订获取积分，兑换专属优惠券</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">位置服务</h3>
                  <p className="text-center text-sm text-gray-500">查看民宿准确位置和周边设施，提供便捷导航</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <UserRound className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">个性化推荐</h3>
                  <p className="text-center text-sm text-gray-500">根据您的偏好和历史记录提供个性化房间推荐</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-green-800 sm:text-5xl">用户评价</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  看看其他用户对我们服务的评价
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1">
                      {Array(5)
                        .fill(null)
                        .map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${j < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                          />
                        ))}
                    </div>
                    <blockquote className="mt-4 border-l-2 border-green-500 pl-4">
                      <p className="text-sm text-gray-500">
                        "服务非常周到，房间干净整洁，地理位置优越，周边设施齐全，下次还会选择这里。"
                      </p>
                    </blockquote>
                    <div className="mt-4 flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200" />
                      <div>
                        <p className="text-sm font-medium">张先生</p>
                        <p className="text-xs text-gray-500">入住于2023年8月</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full bg-green-600 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">订阅我们的优惠信息</h2>
                <p className="max-w-[900px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  及时获取最新优惠信息和专属折扣
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-green-900 placeholder:text-green-900/50"
                    placeholder="输入您的邮箱"
                    type="email"
                  />
                  <Button type="submit" className="bg-white text-green-600 hover:bg-green-50">
                    订阅
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
