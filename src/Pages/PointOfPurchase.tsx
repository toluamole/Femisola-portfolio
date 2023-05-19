import { Heading, Image, Stack, Text,  VStack } from '@chakra-ui/react';
import React from 'react';
import { ProjectModal } from '../Components/ProjectModel';
import Star from '../Assets/Images/Star.svg';
import POP from '../Assets/Images/POP.png';
import ATOMIC from '../Assets/Images/ATOMIC.png';
import Architecture from '../Assets/Images/Architecture.png';
import Lofi1 from '../Assets/Images/Lofi1.png';
import Lofi2 from '../Assets/Images/Lofi2.png';
import Lofi3 from '../Assets/Images/Lofi3.png';
import Hifi1 from '../Assets/Images/Hifi1.png';
import Hifi2 from '../Assets/Images/Hifi2.png';
import Hifi3 from '../Assets/Images/Hifi3.png';
import Hifi4 from '../Assets/Images/Hifi4.png';
import Hifi5 from '../Assets/Images/Hifi5.png';
import Hifi6 from '../Assets/Images/Hifi6.png';
import Hifi7 from '../Assets/Images/Hifi7.png';
import Hifi8 from '../Assets/Images/Hifi8.png';
import Hifi9 from '../Assets/Images/Hifi9.png';
import Hifi10 from '../Assets/Images/Hifi10.png';
import Hifi11 from '../Assets/Images/Hifi11.png';
import backgroundImage from '../Assets/Space-background.png';
import { MotionBox, rotation } from './Home';

interface IPOPProps{
    open: boolean;
    close: () => void;
}

export const PointOfPurchase = ({open, close}:IPOPProps) => {
	return(
		<ProjectModal open={open} close={close} background={`url(${backgroundImage})`}>
			<Stack
				alignItems={'center'}
				spacing={'96px'}
			>
				<VStack
					justifyContent={'center'}
					align={'center'}
					pt={'100px'}
					spacing={'20px'}
				>
					<Heading 
						color={'#fff'}
						fontSize={['60px','88px']}
					>Point of Purchase</Heading>
					<Text textAlign={'center'}  color={'#fff'} fontSize={'30px'}  w={['','60%']}>
                        A platform for simplifying menu creation, easier checkout process with localized options, setting taxes and VATs. 
                        I worked as the solo designer to create an intuitive experience with clean aesthetics.
					</Text>
					<MotionBox
						variants={rotation}
						animate='animate'
						alignSelf={'center'} 
					>
						<Image 
							src={Star} 
							w={'100px'} 
							h={'100px'} 
						/>
					</MotionBox>
				</VStack>
				<Image src={POP} objectFit={'cover'} borderRadius={'24px'} />
				<Stack
					// px={['','200px']}
					spacing={'24px'}
					w={'800px'}
				>
					<Heading  color={'#fff'} fontSize={'24px'}>Role</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						I led design and delivered high priority features , screens, prototype and interactions for the MVP which was to immediately add value to customers and businesses. 
						I had enough freedom where I was able to define what features we will need based on research conducted and what we shouldn’t go ahead with for the MVP.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						I also led research on what a Point of Sales system which caters for the local community 
						and has enough scalability would be in order to establish the vision of the product/services in a localization, 
						and provide a holistic and strategic approach to positioning our solution for payments and menu creation.
					</Text>
					<Heading color={'#fff'} fontSize={'24px'}>Timeline</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Mvp-3months
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'}>Overview</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Point of Purchase system is an enterprise Saas solution that helps small, 
						medium-sized and corporate restaurants manage their businesses efficiently by simplifying menu creation, 
						easier checkout process with localized options, setting taxes and VATs, staff management, reports and analytics, etc.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} w={'100%'}>Research and Discovery</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						I was approached to provide insight to help inform strategy and direction for a new POS solution in the African space.
						At first. there was hardly any cohesive plan. All I was told was that we needed to build a POS solution and a checkout
						experience for.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						At first, we were just told to do what they wanted(based on some shared screens and conversations).
						But then after a lot of ideation and wireframes on my end, I realized this wasn&apos;t enough and i didn&apos;t have enough data to work with.
					</Text>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
						How might we understand what and who we want to build for better?
					</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						I and the Product Manager assigned to the project decided to visit restaurants we knew and ask them questions and also watch how they took customers&apos; orders. 
						This phase could as well be called the user interview phase. What we discovered was quite interesting.

					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Our main takeaway was that our initial ideas were not for the people we wanted to build for, which further cements the role of research. 
						From observing these restaurants we noticed a lot were using lightspeed POS and a lot of the features which lightspeed provides were not being used. 
						We observed how they were taking customer orders, how it moves from the counter to the bar and kitchen, and how they take payments. 
						We also looked at how their menus were set up.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						After observing them using these systems, we asked a couple of questions to understand their pain points using the current system and 
						what they would prefer they had to make their work easier.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						This went on for a couple of days because we wanted to understand what we were building for. After this process, 
						we were able to sit down collate our findings, and know the approach we were going to take for this project.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Asides from knowing that the most used POS solution was Lightspeed we looked at some other POS solutions used globally and we found quite a few. 
						After sieving through quite a number we were able to prioritize three to look at, Lightspeed, Square, and Zettle.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						I did an extensive review of each of these products to see how they approached solving their problems and compared each of these solutions to the results of our user research and interviews. 
						This helped to come at a good solution that was both world-class and also solved our user&apos;s problems
					</Text>
				</Stack>
				<Image src={ATOMIC}  objectFit={'cover'} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} >Takeaways and CA</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						From the research done and interviews, we were able to arrive at certain conclusions on what users need. 
						Of course this is not conclusive as there’s still a need for usability tests. 
					</Text>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
						What did we learn?
					</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						I’ll try to break this down. From the result of the research done, 
						I was able to deduce the primary things users need, which was Create Menu, Take Orders, Checkout, Collect Payments, See reports and analytics and manage staffs and users. 
						We introduced customer management also, but decided to hold off on that till we roll out more updates.
					</Text>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
						The CAs
					</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						While light speed offered a variety of features, most of these features were not being used actively 
						by users as their main day-to-day tasks were to take orders as quickly as possible and have a repository 
						where they can get their total sales for the day, and keep track of finances.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Asides from that, I looked into the international market to see similar products and how they approached building their POS solutions. 
						There are currently a lot of POS projects out there that offer similar features we want to use and also have a wide range of acceptability.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>Products researched on</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>Square App</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>Zettle</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>Lightspeed POS</Text>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
						Square
					</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Square Point of Sale is a free point-of-sale app that enables you to sell 
						anywhere and in any way, your customers want to buy.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						The main reason why square served as my primary point of contact was because of its general acceptability. 
						It has gone through most use cases you could think of and it had a unique idea of approaching solutions for its customers/users. 
						They provided solutions for users to take orders on the go, pay with card readers, access sales reports, employee management, payroll management, and hourly checkups for employees.
					</Text>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						They also had a simple (yet complex, mainly due to its many features) and accessible product.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
						iZettle
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						iZettle provides a mobile point of sale (POS) solution to allow users to accept card payments via their smartphone or tablet. It allows users to track every sale, all in one place.
					</Text>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						iZettle has been able to provide a fresh approach to taking orders/making sales. 
						They’ve been able to simplify their product (where the square app was lacking) and provide a very simple and intuitive interface for their users.
					</Text>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Zettles&apos; approach is very similar to Square&apos;s approach but they just offer fewer features and focus simply on users that just want to make sales. 
						They had very similar features to square e.g, adding products, setting up vats, invoices, receipts, customer management, etc.
					</Text>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						I was able to look at what they had done and pick out what’s needed for our users over here and also what fits into our current market and our business needs.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
						Lightspeed
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						This product won&apos;t necessarily be at the top of my list but it was what one of our users was familiar with. 
						During the interview process, we asked the user to walk us through how they take their orders and we realized some deficiencies in the way they take orders using lightspeed. 
						Also, they didn&apos;t have a centralized method of taking payments as they had multiple action buttons vying for the user&apos;s attention. 
						This was one of the things I tried to fix and look for a better way of approaching a solution for it.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
						Others
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						For UI and UX flows a couple of products were looked at to understand how they approached coming up with solutions for separate things. 
						For example, Shopify creates discount flow, Squarespace creating taxes flow, and the way Spotify handles filtering. And also, Squarespace&apos;s FIFO approach to their users&apos; products.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} >Information Architecture</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						To proceed we needed to define our system. 
						For a complex system like this with multiple layers and flows which will translate to the checkout experience, 
						it was important to create an information architecture and build a seamless workflow for our users.
					</Text>
				</Stack>
				<Image src={Architecture} />
				<Text px={'250px'} alignSelf={'flex-start'} color={'#fff'} fontSize={'20px'} fontWeight={'light'}>I won&apos;t be able to post the user flows due to legal constraints.</Text>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} >Low Fidelity Screens</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						For some other projects, sometimes I move straight to high fidelity but due to the complexity of this system, 
						I decided to start with low/mid fi screens. I wanted us to be sure we were doing the right thing and not expend energy by going straight to hifi.
					</Text>
				</Stack>
				<Image src={Lofi1} />
				<Image src={Lofi2} />
				<Image src={Lofi3} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} >High Fidelity Screens</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						For some other projects, sometimes I move straight to high fidelity but due to the complexity of this system, 
						I decided to start with low/mid fi screens. I wanted us to be sure we were doing the right thing and not expend energy by going straight to hifi.
					</Text>
				</Stack>
				<Image src={Hifi1} />
				<Image src={Hifi2} />
				<Image src={Hifi3} />
				<Image src={Hifi4} />
				<Image src={Hifi5} />
				<Image src={Hifi6} />
				<Image src={Hifi7} />
				<Image src={Hifi8} />
				<Image src={Hifi9} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} >Some Components and Design Assets Used</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						I created a couple of resusable components which I used across the system. 
						I also worked on the interations and interactive states for all these components.
					</Text>
				</Stack>
				<Image src={Hifi10} />
				<Image src={Hifi11} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} >Takeaways from this project</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						An interesting thing I noted whilst testing the design was people’s choice of colors. 
						Because the system was built to accomadate for menu customization (hence the multiple colors on the checkout page),  
						I wanted to check which colors to retain. Since I wanted to limit the number of colors to be used. 
						What I noticed whilst testing was that a lot of men chose dull or greyed out colors and then most women chose the bright colors when creating their menus.
					</Text>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						This just reaffirmed my believe that you never know if you are building the right thing till you talk to people that will use it. 
						Always test your designs.
					</Text>
				</Stack>
			</Stack>
		</ProjectModal>
	);
};
