"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Home, LogIn, MapPin, Menu, Search, ShoppingBag, User } from "lucide-react"

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>酒店预订网站</SheetTitle>
                <SheetDescription>探索优质住宿，轻松预订</SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-2 text-lg font-medium">
                  <Home className="h-5 w-5 text-green-600" />
                  首页
                </Link>
                <Link href="/rooms" className="flex items-center gap-2 text-lg font-medium">
                  <Search className="h-5 w-5 text-green-600" />
                  浏览房间
                </Link>
                <Link href="/map" className="flex items-center gap-2 text-lg font-medium">
                  <MapPin className="h-5 w-5 text-green-600" />
                  地图查看
                </Link>
                <Link href="/favorites" className="flex items-center gap-2 text-lg font-medium">
                  <Heart className="h-5 w-5 text-green-600" />
                  我的收藏
                </Link>
                <Link href="/orders" className="flex items-center gap-2 text-lg font-medium">
                  <ShoppingBag className="h-5 w-5 text-green-600" />
                  我的订单
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl text-green-600">民宿预订</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-green-600">
              首页
            </Link>
            <Link href="/rooms" className="text-sm font-medium transition-colors hover:text-green-600">
              浏览房间
            </Link>
            <Link href="/map" className="text-sm font-medium transition-colors hover:text-green-600">
              地图查看
            </Link>
            <Link href="/coupons" className="text-sm font-medium transition-colors hover:text-green-600">
              优惠券
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="用户头像" />
                    <AvatarFallback>用户</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
                    <User className="h-4 w-4" />
                    个人信息
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders" className="flex items-center gap-2 cursor-pointer">
                    <ShoppingBag className="h-4 w-4" />
                    我的订单
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/favorites" className="flex items-center gap-2 cursor-pointer">
                    <Heart className="h-4 w-4" />
                    我的收藏
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>退出登录</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(true)}>
              <LogIn className="mr-2 h-4 w-4" />
              登录/注册
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
