"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Package, Settings, Star, Tag, User } from "lucide-react"

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "张三",
    phone: "13800138000",
    email: "zhangsan@example.com",
    avatar: "/placeholder.svg",
    points: 320,
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container grid gap-8 md:grid-cols-[240px_1fr]">
          {/* 侧边栏 */}
          <aside className="hidden md:block">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={userData.avatar} alt={userData.name} />
                    <AvatarFallback>{userData.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{userData.name}</h3>
                    <p className="text-sm text-muted-foreground">积分: {userData.points}</p>
                  </div>
                </div>
                <nav className="mt-6 flex flex-col space-y-1">
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="#profile">
                      <User className="mr-2 h-4 w-4 text-green-600" />
                      个人信息
                    </a>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="#orders">
                      <Package className="mr-2 h-4 w-4 text-green-600" />
                      我的订单
                    </a>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="#favorites">
                      <Heart className="mr-2 h-4 w-4 text-green-600" />
                      我的收藏
                    </a>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="#coupons">
                      <Tag className="mr-2 h-4 w-4 text-green-600" />
                      我的优惠券
                    </a>
                  </Button>
                  <Button variant="ghost" className="justify-start" asChild>
                    <a href="#settings">
                      <Settings className="mr-2 h-4 w-4 text-green-600" />
                      账户设置
                    </a>
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* 主要内容区 */}
          <div className="space-y-8">
            <Card id="profile">
              <CardHeader>
                <CardTitle>个人信息</CardTitle>
                <CardDescription>查看和编辑您的个人信息</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userData.avatar} alt={userData.name} />
                      <AvatarFallback>{userData.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium">{userData.name}</h3>
                      <p className="text-sm text-muted-foreground">更新您的头像和个人信息</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          更改头像
                        </Button>
                        <Button variant="outline" size="sm">
                          删除头像
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">用户名</Label>
                        <Input id="name" defaultValue={userData.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">手机号</Label>
                        <Input id="phone" defaultValue={userData.phone} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱</Label>
                      <Input id="email" type="email" defaultValue={userData.email} />
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">保存修改</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="orders">
              <CardHeader>
                <CardTitle>我的订单</CardTitle>
                <CardDescription>查看您的所有订单</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">全部</TabsTrigger>
                    <TabsTrigger value="pending">待支付</TabsTrigger>
                    <TabsTrigger value="completed">已完成</TabsTrigger>
                    <TabsTrigger value="canceled">已取消</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4 space-y-4">
                    {[1, 2, 3].map((order) => (
                      <Card key={order}>
                        <CardContent className="p-4">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">豪华海景套房</h3>
                                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                  已完成
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">订单号: ORD12345678{order}</p>
                              <p className="text-sm text-muted-foreground">
                                入住: 2023-10-0{order} 至 2023-10-0{order + 2}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                查看详情
                              </Button>
                              <Button variant="outline" size="sm">
                                <Star className="mr-1 h-4 w-4" />
                                评价
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  <TabsContent value="pending" className="mt-4">
                    <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                      <p className="text-sm text-muted-foreground">暂无待支付订单</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="completed" className="mt-4">
                    <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                      <p className="text-sm text-muted-foreground">暂无已完成订单</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="canceled" className="mt-4">
                    <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                      <p className="text-sm text-muted-foreground">暂无已取消订单</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card id="favorites">
              <CardHeader>
                <CardTitle>我的收藏</CardTitle>
                <CardDescription>查看您收藏的房间</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="房间图片"
                          className="h-40 w-full object-cover"
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
                          <h3 className="font-semibold">日式简约民宿 {item}</h3>
                          <p className="text-sm text-muted-foreground">苏州·姑苏区</p>
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-green-700">¥428/晚</div>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              查看详情
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card id="coupons">
              <CardHeader>
                <CardTitle>我的优惠券</CardTitle>
                <CardDescription>查看和兑换优惠券</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium">我的积分: {userData.points}</h3>
                    <p className="text-sm text-muted-foreground">通过分享房间和完成订单可获取更多积分</p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">兑换优惠券</Button>
                </div>
                <div className="space-y-4">
                  {[1, 2].map((coupon) => (
                    <Card key={coupon} className="relative overflow-hidden bg-gradient-to-r from-green-50 to-green-100">
                      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-green-100" />
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Tag className="h-5 w-5 text-green-600" />
                              <h3 className="font-bold text-xl text-green-800">¥{coupon * 50}元优惠券</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">满{coupon * 200}元可用</p>
                            <p className="text-sm text-muted-foreground">有效期至: 2023-12-31</p>
                          </div>
                          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                            立即使用
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card id="settings">
              <CardHeader>
                <CardTitle>账户设置</CardTitle>
                <CardDescription>管理您的账户和安全设置</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">修改密码</h3>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">当前密码</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">新密码</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">确认新密码</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </div>
                    <Button className="mt-4 bg-green-600 hover:bg-green-700">更新密码</Button>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">账户安全</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">绑定手机</p>
                          <p className="text-sm text-muted-foreground">{userData.phone}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          修改
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">绑定邮箱</p>
                          <p className="text-sm text-muted-foreground">{userData.email}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          修改
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
