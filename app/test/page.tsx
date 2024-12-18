"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react"

export default function TestPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 防止服务端渲染不匹配
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // 避免服务端渲染闪烁
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">UI 组件测试页面</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Accordion 示例</CardTitle>
            <CardDescription>可折叠的内容面板</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Shadcn/ui 是什么？</AccordionTrigger>
                <AccordionContent>
                  Shadcn/ui 是一个基于 Radix UI 和 Tailwind CSS 的组件集合，提供了可重用、可访问的组件。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>为什么选择 Shadcn/ui？</AccordionTrigger>
                <AccordionContent>
                  它提供了优秀的开发体验、可定制性和可访问性，同时保持了���小的包大小。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="bg-primary/10 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">颜色系统测试</h2>
          <p className="text-muted-foreground mb-4">
            展示不同颜色的实际应用场景
          </p>
          <div className="space-y-4">
            {/* Primary 颜色示例 */}
            <div className="space-y-2">
              <h3 className="font-medium">Primary 颜色（主要颜色）</h3>
              <div className="flex gap-2">
                <Button variant="default">主要按钮</Button>
                <div className="bg-primary text-primary-foreground p-2 rounded flex items-center">
                  <span>品牌主色</span>
                </div>
              </div>
            </div>

            {/* Secondary 颜色示例 */}
            <div className="space-y-2">
              <h3 className="font-medium">Secondary 颜色（次要颜色）</h3>
              <div className="flex gap-2">
                <Button variant="secondary">次要按钮</Button>
                <div className="bg-secondary text-secondary-foreground p-2 rounded flex items-center">
                  <span>辅助色</span>
                </div>
              </div>
            </div>

            {/* Accent 颜色示例 */}
            <div className="space-y-2">
              <h3 className="font-medium">Accent 颜色（强调颜色）</h3>
              <div className="flex gap-2">
                <Button variant="outline" className="hover:bg-accent">
                  悬停查看强调色
                </Button>
                <div className="bg-accent text-accent-foreground p-2 rounded flex items-center">
                  <span>强调色</span>
                </div>
              </div>
            </div>

            {/* 其他常用颜色 */}
            <div className="space-y-2">
              <h3 className="font-medium">其他系统颜色</h3>
              <div className="flex gap-2">
                <Button variant="destructive">危险操作</Button>
                <span className="text-muted-foreground">次要文本</span>
                <div className="border p-2 rounded">边框色</div>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Radix UI 组件测试</CardTitle>
            <CardDescription>测试 Radix UI 的基础组件</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="头像" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Separator orientation="vertical" className="h-8" />
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="选择主题" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">浅色模式</SelectItem>
                  <SelectItem value="dark">深色模式</SelectItem>
                  <SelectItem value="system">系统默认</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="default">默认按钮</Button>
              <Button variant="destructive">危险按钮</Button>
              <Button variant="outline">边框按钮</Button>
              <Button variant="secondary">次要按钮</Button>
              <Button variant="ghost">幽灵按钮</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 