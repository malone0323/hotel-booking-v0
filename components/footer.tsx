import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-green-600">民宿预订</h3>
          <p className="text-sm text-gray-500">为您提供高品质的住宿体验，让您的旅行更加舒适愉快。</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium">快速链接</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm text-gray-500 hover:text-green-600">
                首页
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="text-sm text-gray-500 hover:text-green-600">
                浏览房间
              </Link>
            </li>
            <li>
              <Link href="/map" className="text-sm text-gray-500 hover:text-green-600">
                地图查看
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-gray-500 hover:text-green-600">
                关于我们
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium">用户服务</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/login" className="text-sm text-gray-500 hover:text-green-600">
                登录/注册
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-sm text-gray-500 hover:text-green-600">
                个人中心
              </Link>
            </li>
            <li>
              <Link href="/orders" className="text-sm text-gray-500 hover:text-green-600">
                订单管理
              </Link>
            </li>
            <li>
              <Link href="/coupons" className="text-sm text-gray-500 hover:text-green-600">
                优惠券
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-medium">联系我们</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-500">邮箱：contact@example.com</li>
            <li className="text-sm text-gray-500">电话：400-123-4567</li>
            <li className="text-sm text-gray-500">地址：北京市朝阳区XX大街XX号</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-6">
        <p className="text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} 民宿预订网站 版权所有</p>
      </div>
    </footer>
  )
}
