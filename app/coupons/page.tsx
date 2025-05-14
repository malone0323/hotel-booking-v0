import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Coins, Tag } from "lucide-react"

// 模拟优惠券数据
const availableCoupons = [
  { id: 1, amount: 50, minAmount: 200, points: 100, validUntil: "2023-12-31" },
  { id: 2, amount: 100, minAmount: 400, points: 200, validUntil: "2023-12-31" },
  { id: 3, amount: 150, minAmount: 600, points: 300, validUntil: "2023-12-31" },
  { id: 4, amount: 200, minAmount: 800, points: 400, validUntil: "2023-12-31" },
  { id: 5, amount: 300, minAmount: 1000, points: 500, validUntil: "2023-12-31" },
]

// 模拟用户数据
const user = {
  points: 320,
}

export default function CouponsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-green-800">优惠券中心</h1>
            <p className="text-muted-foreground">用积分兑换优惠券，在订单支付时使用</p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>可兑换的优惠券</CardTitle>
                  <CardDescription>使用积分兑换以下优惠券</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableCoupons.map((coupon) => (
                      <Card
                        key={coupon.id}
                        className="relative overflow-hidden bg-gradient-to-r from-green-50 to-green-100"
                      >
                        <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-green-100" />
                        <CardContent className="p-4">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Tag className="h-5 w-5 text-green-600" />
                                <h3 className="font-bold text-xl text-green-800">¥{coupon.amount}元优惠券</h3>
                              </div>
                              <p className="text-sm text-muted-foreground">满{coupon.minAmount}元可用</p>
                              <p className="text-sm text-muted-foreground">有效期至: {coupon.validUntil}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 text-sm text-green-600">
                                <Coins className="h-4 w-4" />
                                {coupon.points}积分
                              </div>
                              <Button
                                variant="outline"
                                className="border-green-600 text-green-600 hover:bg-green-50"
                                disabled={user.points < coupon.points}
                              >
                                立即兑换
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>我的积分</CardTitle>
                  <CardDescription>查看和使用您的积分</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Coins className="h-8 w-8 text-green-600" />
                    <span className="text-3xl font-bold text-green-700">{user.points}</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h3 className="mb-2 font-medium">如何获取积分？</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-green-200 flex items-center justify-center text-green-700 text-xs">
                            1
                          </div>
                          <span>分享房间：每次分享获得10积分</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-green-200 flex items-center justify-center text-green-700 text-xs">
                            2
                          </div>
                          <span>完成订单：消费金额的1%转为积分</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-green-200 flex items-center justify-center text-green-700 text-xs">
                            3
                          </div>
                          <span>评价订单：每次评价获得20积分</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>我的优惠券</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="available" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="available">可用</TabsTrigger>
                      <TabsTrigger value="used">已使用</TabsTrigger>
                    </TabsList>
                    <TabsContent value="available" className="mt-4 space-y-4">
                      <Card className="relative overflow-hidden bg-gradient-to-r from-green-50 to-green-100">
                        <CardContent className="p-4">
                          <div className="space-y-1">
                            <h3 className="font-bold text-green-800">¥50元优惠券</h3>
                            <p className="text-xs text-muted-foreground">满200元可用</p>
                            <p className="text-xs text-muted-foreground">有效期至: 2023-12-31</p>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="used" className="mt-4">
                      <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                        <p className="text-sm text-muted-foreground">暂无已使用的优惠券</p>
                      </div>
                    </TabsContent>
                  </Tabs>
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
