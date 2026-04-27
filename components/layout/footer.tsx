import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";

const links = {
  Product: ["기능", "가격", "변경 이력", "로드맵"],
  Company: ["소개", "블로그", "채용", "언론"],
  Resources: ["문서", "가이드", "API", "커뮤니티"],
  Legal: ["개인정보처리방침", "이용약관", "쿠키 정책"],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Zap className="h-4 w-4 text-primary" />
            Starter
          </Link>
          <p className="text-sm text-muted-foreground">
            © 2026 Starter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
