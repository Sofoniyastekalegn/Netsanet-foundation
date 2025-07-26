import { Link } from 'react-router-dom';
import { Heart, Scale, FileText, Users, BookOpen, MessageCircle, Shield, Globe } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: Scale,
            title: 'AI Legal Advisor',
            description: 'Get personalized legal guidance based on Ethiopian law and your specific situation.',
            path: '/legal-advisor',
            color: 'bg-blue-500'
        },
        {
            icon: FileText,
            title: 'Appeal Generator',
            description: 'Generate formal appeal letters in both Amharic and English for your case.',
            path: '/appeal-generator',
            color: 'bg-green-500'
        },
        {
            icon: Users,
            title: 'Support Directory',
            description: 'Find nearby legal aid organizations and support services in your region.',
            path: '/support-directory',
            color: 'bg-purple-500'
        },
        {
            icon: BookOpen,
            title: 'Case Stories',
            description: 'Read inspiring stories from other women who have overcome similar challenges.',
            path: '/case-stories',
            color: 'bg-orange-500'
        },
        {
            icon: MessageCircle,
            title: 'Story Wall',
            description: 'Share your experiences anonymously and connect with others.',
            path: '/story-wall',
            color: 'bg-pink-500'
        }
    ];

    return (
        <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="flex items-center gap-4 text-5xl font-bold mb-4">
                                <Heart className="w-12 h-12" />
                                Netsanet
                            </h1>
                            <p className="text-2xl mb-5 opacity-90">
                                AI-Powered Support for Women in Ethiopia
                            </p>
                            <p className="text-lg mb-8 opacity-80 leading-relaxed">
                                Get legal guidance, generate formal appeals, and connect with support organizations.
                                You're not alone in your journey toward justice and empowerment.
                            </p>
                            <div className="flex gap-4 justify-center lg:justify-start">
                                <Link to="/legal-advisor" className="btn btn-primary">
                                    Get Legal Advice
                                </Link>
                                <Link to="/support-directory" className="btn btn-secondary">
                                    Find Support
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-80 h-80 bg-white/10 rounded-2xl backdrop-blur-lg flex items-center justify-center">
                                <Shield className="w-32 h-32 text-white opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-center text-4xl font-bold mb-15 text-gray-900">How We Can Help You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Link key={index} to={feature.path} className="card hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                    <div className={`w-15 h-15 rounded-full flex items-center justify-center mb-5 ${feature.color}`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-15">
                        <div className="lg:col-span-2">
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">About Netsanet</h2>
                            <p className="text-gray-600 mb-5 leading-relaxed">
                                Netsanet (meaning "solidarity" in Amharic) is dedicated to supporting women in Ethiopia
                                who experience abuse and discrimination. Our AI-powered platform provides:
                            </p>
                            <ul className="mb-5 space-y-2">
                                <li className="text-gray-600">• Legal guidance based on Ethiopian Constitution and laws</li>
                                <li className="text-gray-600">• Formal appeal letter generation in multiple languages</li>
                                <li className="text-gray-600">• Directory of local support organizations</li>
                                <li className="text-gray-600">• Community of shared experiences and support</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                We believe every woman deserves access to justice and support.
                                Your rights matter, and we're here to help you navigate the legal system.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="card">
                                <Globe className="w-10 h-10 text-primary-500 mb-4" />
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Ethiopia-wide</h3>
                                <p className="text-gray-600 text-sm">Support available across all regions</p>
                            </div>
                            <div className="card">
                                <Shield className="w-10 h-10 text-primary-500 mb-4" />
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Confidential</h3>
                                <p className="text-gray-600 text-sm">Your privacy and safety are our priority</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary-500 text-center">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 opacity-90">Take the first step toward justice and empowerment</p>
                    <Link to="/legal-advisor" className="btn btn-primary btn-large">
                        Start Your Journey
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home; 