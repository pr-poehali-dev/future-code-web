import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const courses = [
    {
      title: 'Python для начинающих',
      description: 'Освойте основы программирования на Python с нуля. Практические задачи, проекты и поддержка менторов.',
      price: '25 000 ₽',
      duration: '3 месяца',
      icon: 'Code2',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Веб-дизайн и UX/UI',
      description: 'Создавайте современные интерфейсы. Figma, Adobe XD, прототипирование и работа с реальными проектами.',
      price: '30 000 ₽',
      duration: '4 месяца',
      icon: 'Palette',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Data Science и анализ данных',
      description: 'Анализ больших данных, машинное обучение, визуализация. Python, Pandas, NumPy, Scikit-learn.',
      price: '35 000 ₽',
      duration: '5 месяцев',
      icon: 'LineChart',
      gradient: 'from-blue-500 to-violet-600'
    }
  ];

  const team = [
    {
      name: 'Анна Сергеева',
      role: 'Python-разработчик',
      experience: '8 лет опыта в разработке',
      specialization: 'Backend, API, ML'
    },
    {
      name: 'Максим Иванов',
      role: 'Дизайнер',
      experience: '6 лет опыта в дизайне',
      specialization: 'UI/UX, Branding'
    },
    {
      name: 'Елена Петрова',
      role: 'Data Scientist',
      experience: '7 лет опыта в анализе данных',
      specialization: 'ML, Big Data, Analytics'
    }
  ];

  const reviews = [
    {
      name: 'Дмитрий К.',
      course: 'Python для начинающих',
      rating: 5,
      text: 'Отличный курс! Начал с нуля, сейчас уже работаю джуниором. Преподаватели объясняют сложное простым языком.',
      date: '2 недели назад'
    },
    {
      name: 'Мария С.',
      course: 'Веб-дизайн и UX/UI',
      rating: 5,
      text: 'Очень практичный курс. Много реальных проектов, отличная обратная связь от менторов. Рекомендую!',
      date: '1 месяц назад'
    },
    {
      name: 'Алексей П.',
      course: 'Data Science',
      rating: 5,
      text: 'Глубокое погружение в Data Science. Научился работать с ML-моделями и большими данными. Курс стоит своих денег.',
      date: '3 недели назад'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0F172A]/80 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/529a0f0c-fc27-4be2-a054-58f23eaa3bb9/bucket/8baed6c1-1859-4cd0-8ef2-d7627d8389dd.png" 
                  alt="Код будущего" 
                  className="h-16 md:h-20 w-auto relative"
                />
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'courses', 'team', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-cyan-400 transition-colors ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О нас'}
                  {section === 'courses' && 'Курсы'}
                  {section === 'team' && 'Команда'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>

            <Button className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 neon-border">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
              Программируй <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">будущее</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              IT-академия нового поколения. Курсы по программированию, дизайну и Data Science
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 neon-border text-lg px-8"
                onClick={() => scrollToSection('courses')}
              >
                <Icon name="Rocket" className="mr-2" />
                Выбрать курс
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8"
                onClick={() => scrollToSection('contacts')}
              >
                Связаться с нами
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-400">Трудоустройство</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">4.9</div>
                <div className="text-gray-400">Рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-text">О нас</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#1E293B] border-cyan-500/20 hover:border-cyan-500/50 transition-all neon-border">
              <CardHeader>
                <Icon name="Target" className="text-cyan-400 mb-4" size={48} />
                <CardTitle className="text-2xl text-cyan-400">Наша миссия</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  Мы создаём IT-специалистов будущего через практическое обучение, 
                  менторство и работу над реальными проектами. Наша цель — сделать 
                  качественное IT-образование доступным каждому.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-purple-500/20 hover:border-purple-500/50 transition-all neon-border">
              <CardHeader>
                <Icon name="Zap" className="text-purple-400 mb-4" size={48} />
                <CardTitle className="text-2xl text-purple-400">Преимущества</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Практический подход — работа над реальными проектами</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Персональное менторство от экспертов индустрии</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-cyan-400 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Помощь в трудоустройстве и создание портфолио</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">Наши курсы</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Выберите направление и начните карьеру в IT</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="bg-[#1E293B] border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105 transform duration-300 neon-border group"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-4 group-hover:animate-float`}>
                    <Icon name={course.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl text-cyan-400">{course.title}</CardTitle>
                  <CardDescription className="text-gray-400">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Стоимость:</span>
                      <span className="text-2xl font-bold text-cyan-400">{course.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Длительность:</span>
                      <span className="text-white font-semibold">{course.duration}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 mt-4">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">Наша команда</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Эксперты с реальным опытом в индустрии</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="bg-[#1E293B] border-purple-500/20 hover:border-purple-500/50 transition-all neon-border"
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center neon-border">
                    <Icon name="User" className="text-white" size={64} />
                  </div>
                  <CardTitle className="text-2xl text-purple-400">{member.name}</CardTitle>
                  <CardDescription className="text-cyan-400 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-500">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">Отзывы студентов</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Что говорят наши выпускники</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="bg-[#1E293B] border-cyan-500/20 hover:border-cyan-500/50 transition-all neon-border"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-cyan-400">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-purple-400 text-sm">{review.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{review.text}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-text">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="bg-[#1E293B] border-cyan-500/20 neon-border mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">Свяжитесь с нами</CardTitle>
                  <CardDescription className="text-gray-400">
                    Ответим на все ваши вопросы
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-cyan-400" size={24} />
                    <span className="text-gray-300">г. Москва, ул. Тверская, д. 7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="text-cyan-400" size={24} />
                    <span className="text-gray-300">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-cyan-400" size={24} />
                    <span className="text-gray-300">info@codefuture.ru</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1E293B] border-cyan-500/20 neon-border">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <Icon name="Map" className="text-cyan-400" size={64} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[#1E293B] border-purple-500/20 neon-border">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-400">Форма обратной связи</CardTitle>
                <CardDescription className="text-gray-400">
                  Оставьте заявку и мы свяжемся с вами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      className="bg-[#0F172A] border-cyan-500/30 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      placeholder="example@mail.ru" 
                      className="bg-[#0F172A] border-cyan-500/30 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите, что вас интересует..."
                      rows={5}
                      className="bg-[#0F172A] border-cyan-500/30 focus:border-cyan-500"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                    <Icon name="Send" className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0F1E] border-t border-cyan-500/20 py-8 px-4 mt-20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://cdn.poehali.dev/projects/529a0f0c-fc27-4be2-a054-58f23eaa3bb9/bucket/8baed6c1-1859-4cd0-8ef2-d7627d8389dd.png" 
              alt="Код будущего" 
              className="h-10 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-4">IT-академия нового поколения</p>
          <p className="text-gray-500 text-sm">© 2024 Код Будущего. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;