import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="min-w-[50px]"
        title="English"
      >
        <span className="flex items-center gap-1">
          <Globe className="w-4 h-4" />
          EN
        </span>
      </Button>
      <Button
        variant={language === 'ar' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ar')}
        className="min-w-[50px]"
        title="العربية"
      >
        <span className="flex items-center gap-1">
          <Globe className="w-4 h-4" />
          AR
        </span>
      </Button>
    </div>
  );
}
