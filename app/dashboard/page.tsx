import { DashboardHeader } from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Activity,
  Target,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "총 수익",
    value: "₩12,345,678",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "사용자 수",
    value: "3,842",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "활성 세션",
    value: "1,204",
    change: "-3.1%",
    trend: "down",
    icon: Activity,
  },
  {
    title: "목표 달성률",
    value: "87%",
    change: "+5.0%",
    trend: "up",
    icon: Target,
  },
];

const recentActivity = [
  { user: "김철수", action: "새 계정 가입", time: "2분 전", status: "new" },
  { user: "이영희", action: "프리미엄 업그레이드", time: "15분 전", status: "upgrade" },
  { user: "박민준", action: "결제 완료", time: "32분 전", status: "payment" },
  { user: "최지은", action: "새 계정 가입", time: "1시간 전", status: "new" },
  { user: "정하늘", action: "문의 접수", time: "2시간 전", status: "inquiry" },
];

const quickActions = [
  { label: "사용자 초대", description: "팀원에게 초대장 전송" },
  { label: "보고서 생성", description: "월간 분석 보고서 다운로드" },
  { label: "설정 업데이트", description: "프로필 및 알림 설정" },
  { label: "지원 문의", description: "고객 지원팀에 문의하기" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <DashboardHeader title="대시보드" />

      <div className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">안녕하세요 👋</h2>
          <p className="text-muted-foreground">오늘의 주요 현황을 확인하세요.</p>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p
                  className={`mt-1 flex items-center text-xs font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {stat.change} 지난달 대비
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">최근 활동</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {item.user[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.user}</p>
                        <p className="text-xs text-muted-foreground">{item.action}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">
                        {item.status === "new" && "신규"}
                        {item.status === "upgrade" && "업그레이드"}
                        {item.status === "payment" && "결제"}
                        {item.status === "inquiry" && "문의"}
                      </Badge>
                      <p className="mt-1 text-xs text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">빠른 액션</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    className="rounded-lg border border-border p-4 text-left transition-colors hover:bg-accent"
                  >
                    <p className="text-sm font-medium">{action.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {action.description}
                    </p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
