import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, Download, MapPin, Star } from "lucide-react"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  // 模拟订单详情数据
  const order = {
    id: params.id,
    roomTitle: "豪华海景套房",
    roomImage: "/placeholder.svg?height=400&width=600",
    location: "三亚·海棠湾",
    checkIn: "2023-10-15",
    checkOut: "2023-10-18",
    price: 698,
    totalPrice: 2094,
    status: "completed",
    createTime: "2023-09-30 14:30",
    payTime: "2023-09-30 14:35",
    isRated: true,
    rating: 5,
    comment: "房间很干净，设施齐全，服务也很好，风景绝佳，下次还会选择这里。",
    roomDetails: {
      area: "45平方米",
      bedType: "大床 2m×2m",
      maxGuests: 2,
      breakfast: "含双早",
      wifi: true,
      smoking: false,
    },
    contactInfo: {
      name: "张三",
      phone: "138****8888",
      email: "zhang***@example.com",
    },
    paymentInfo: {
      method: "微信支付",
      transactionId: "WX20230930143512345",
      coupon: "满200减50",
      couponAmount: 50,
      originalPrice: 2144,
    },
  }

  // 状态映射
  const statusMap = {
    pending: { label: "待支付", color: "bg-yellow-100 text-yellow-800" },
    paid: { label: "已支付", color: "bg-blue-100 text-blue-800" },
    completed: { label: "已完成", color: "bg-green-100 text-green-800" },
    canceled: { label: "已取消", color: "bg-gray-100 text-gray-800" },
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-6">
            <Link href="/orders" className="inline-flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回订单列表
            </Link>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-green-800">订单详情</h1>
                <Badge className={`${statusMap[order.status].color}`}>{statusMap[order.status].label}</Badge>
              </div>
              <p className="text-muted-foreground">订单号: {order.id}</p>
            </div>
            <div className="mt-4 flex gap-2 sm:mt-0">
              {order.status === "completed" && (
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  下载发票
                </Button>
              )}
              <Link href={`/rooms/${encodeURIComponent(order.roomTitle)}`}>
                <Button className="bg-green-600 hover:bg-green-700">再次预订</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              {/* 房间信息 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">房间信息</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
                    <div>
                      <img
                        src={order.roomImage || "/placeholder.svg"}
                        alt={order.roomTitle}
                        className="h-40 w-full rounded-md object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{order.roomTitle}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="mr-1 h-4 w-4 text-green-600" />
                        {order.location}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-sm">
                          <Calendar className="mr-1 h-4 w-4 text-green-600" />
                          <span>
                            {order.checkIn} 至 {order.checkOut}
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="mr-1 h-4 w-4 text-green-600" />
                          <span>
                            共 {(new Date(order.checkOut) - new Date(order.checkIn)) / (1000 * 60 * 60 * 24)} 晚
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="text-sm">
                          <span className="text-gray-500">房间面积: </span>
                          {order.roomDetails.area}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">床型: </span>
                          {order.roomDetails.bedType}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">最多入住: </span>
                          {order.roomDetails.maxGuests}人
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">早餐: </span>
                          {order.roomDetails.breakfast}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 订单时间线 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">订单状态</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <span className="text-sm">1</span>
                        </div>
                        <div className="h-full w-px bg-green-200"></div>
                      </div>
                      <div>
                        <h4 className="font-medium">订单创建</h4>
                        <p className="text-sm text-gray-500">{order.createTime}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <span className="text-sm">2</span>
                        </div>
                        <div className="h-full w-px bg-green-200"></div>
                      </div>
                      <div>
                        <h4 className="font-medium">订单支付</h4>
                        <p className="text-sm text-gray-500">{order.payTime}</p>
                        <p className="text-sm text-gray-500">支付方式: {order.paymentInfo.method}</p>
                        <p className="text-sm text-gray-500">交易号: {order.paymentInfo.transactionId}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <span className="text-sm">3</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">入住完成</h4>
                        <p className="text-sm text-gray-500">{order.checkOut}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 评价信息 */}
              {order.isRated && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">我的评价</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < order.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                                }`}
                              />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">评分: {order.rating}/5</span>
                      </div>
                      <p className="text-gray-700">{order.comment}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              {/* 价格详情 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">价格详情</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">房费</span>
                      <span>
                        ¥{order.price} × {(new Date(order.checkOut) - new Date(order.checkIn)) / (1000 * 60 * 60 * 24)}
                        晚
                      </span>
                    </div>
                    {order.paymentInfo.coupon && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">优惠券</span>
                        <span className="text-red-500">-¥{order.paymentInfo.couponAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-500">清洁费</span>
                      <span>¥50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">服务费</span>
                      <span>
                        ¥
                        {order.paymentInfo.originalPrice -
                          order.price * ((new Date(order.checkOut) - new Date(order.checkIn)) / (1000 * 60 * 60 * 24)) -
                          50}
                      </span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>原价总计</span>
                      <span>¥{order.paymentInfo.originalPrice}</span>
                    </div>
                    {order.paymentInfo.coupon && (
                      <div className="flex justify-between font-bold">
                        <span>优惠后总价</span>
                        <span className="text-green-700">¥{order.totalPrice}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* 联系信息 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">联系信息</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">姓名</span>
                      <span>{order.contactInfo.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">手机号</span>
                      <span>{order.contactInfo.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">邮箱</span>
                      <span>{order.contactInfo.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 帮助与支持 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">帮助与支持</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      申请退款
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      联系客服
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      投诉问题
                    </Button>
                  </div>
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
