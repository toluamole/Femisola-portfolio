import { Heading, Image, Stack, Text,  VStack } from '@chakra-ui/react';
import React from 'react';
import { ProjectModal } from '../Components/ProjectModel';
import Star from '../Assets/Images/Star.svg';
import Architecture from '../Assets/Images/Architecture.png';
import backgroundImage from '../Assets/Space-background.png';
import PROCUREMENT from '../Assets/Images/PROCUREMENT.png';
import solution1 from '../Assets/Images/solution1.png';
import solution2 from '../Assets/Images/solution2.png';
import solution3 from '../Assets/Images/solution3.png';
import solution4 from '../Assets/Images/solution4.png';
import solution5 from '../Assets/Images/solution5.png';
import solution6 from '../Assets/Images/solution6.png';
import solution7 from '../Assets/Images/solution7.png';
import solution8 from '../Assets/Images/solution8.png';
import solution9 from '../Assets/Images/solution9.png';
import solution10 from '../Assets/Images/solution10.png';
import solution11 from '../Assets/Images/solution11.png';
import solution12 from '../Assets/Images/solution12.png';
import { MotionBox, rotation } from './Home';

interface IPOPProps{
    openProcurementModal: boolean;
    closeProcurementModal: () => void;
}

export const Procurement = ({openProcurementModal, closeProcurementModal}:IPOPProps) => {
	return(
		<ProjectModal open={openProcurementModal} close={closeProcurementModal} background={`url(${backgroundImage})`}>
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
					>E-Procurement</Heading>
					<Text textAlign={'center'}  color={'#fff'} fontSize={'30px'}  w={['','60%']}>
						I collaborated on the redesign of a product that facilitates the search for quality and cost-effective food items. 
						The redesign focused on improving the user interface and certain features such as Invoices, Reports and Analytics, 
						and Company Overview. Additionally, the product aims to streamline the sourcing, payment, and delivery processes for food businesses.
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
				<Image src={PROCUREMENT} objectFit={'cover'} borderRadius={'24px'} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} fontWeight={'600'}>Overview</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						E-procurement is a product that facilitates the search for quality and cost-effective food items. 
						The product aims to streamline the sourcing, payment, and delivery processes for food businesses. 
						The goal was to improve the overall user experience, increase customer satisfaction, and make the ordering process more efficient. 
						The project lasted for 2 months and involved collaboration with the development team, stakeholders, and user research.
					</Text>
				</Stack>
				<Stack
					// px={['','200px']}
					spacing={'24px'}
					w={'800px'}
				>
					<Heading  color={'#fff'} fontSize={'24px'} fontWeight={'600'}>Role and activities carried out</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Throughout this project, I was responsible for leading a team of two talented designers in creating a design that immediately added value to both customers and businesses. 
						Our design process included conducting extensive user research, analyzing the results to identify key insights, and creating user personas to represent different types of users and their goals.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Using this information, we designed wireframes and prototypes to test different solutions and gather feedback from stakeholders. 
						Collaborating closely with the development team, we ensured that the design was both feasible and technically sound.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						To validate the effectiveness of our design, we conducted usability testing and implemented changes based on user feedback. 
						In addition, we ran A/B tests to compare the old design with the new one.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						By following these activities, we were able to create a design that exceeded our expectations, 
						delivering a top-notch user experience while also meeting the business requirements.
					</Text>
					<Heading color={'#fff'} fontSize={'24px'}>Timeline</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						2months
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} fontWeight={'600'} w={'100%'}>The Why?</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						After receiving customer feedback that the online ordering service was challenging to use, we discovered that many customers were relying on customer experience specialists to place their orders. 
						We knew we needed to eliminate this roadblock and improve the user experience. 
						Our team conducted a series of interviews and introduced hotjar recordings on the product to understand which areas were often confusing for users.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						With these insights, we embarked on a redesign project to enhance the user experience, 
						differentiate our company from competitors, and ultimately increase customer retention.
					</Text>
					
				</Stack>
				{/* <Image src={ATOMIC}  objectFit={'cover'} /> */}
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} fontWeight={'600'} >Approaching a Solution</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						The project was guided by the design thinking process, which included empathizing with users, defining the problem, 
						ideating solutions, prototyping the design, and testing it with users. 
						We took an iterative approach, continuously refining the design based on feedback from users, stakeholders, and the development team.
					</Text>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Unfortunately, due to certain NDAs, I am unable to disclose specific details about the project&apos;s implementation.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'48px'} fontWeight={'600'} color={'#fff'}>
						OutComes
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						The new design led to a 30% increase in app downloads and a 20% increase in orders. Customers reported that the ordering process was more streamlined, and the app was easier to use. 
						The company also received positive feedback from stakeholders, who appreciated the data-driven approach to the redesign.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'48px'} fontWeight={'600'} color={'#fff'}>
						Learnings and Takeaways
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						This project reinforced the value of conducting user research and collaborating with stakeholders and the development team. 
						It underscored the importance of continuous iteration and testing to ensure the design effectively addressed user needs.
					</Text>
					<Heading fontSize={'28px'} fontWeight={'400'} color={'#fff'}>
						What can be done better next time?
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Next time, I would like to focus more on the accessibility and inclusivity of the design. 
						I would also like to conduct more rigorous A/B testing to ensure the design is optimized for all users. 
						Finally, I would like to involve users earlier in the design process to ensure their needs are reflected in the final design.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'48px'} fontWeight={'600'} color={'#fff'}>
						The Solution
					</Heading>
				</Stack>
				
				<Image src={Architecture} />
				<Image src={solution1} />
				<Image src={solution2} />
				<Image src={solution3} />
				<Image src={solution4} />
				<Image src={solution5} />
				<Image src={solution6} />
				<Image src={solution7} />
				<Image src={solution8} />
				<Image src={solution9} />
				<Image src={solution10} />
				<Image src={solution11} />
				<Image src={solution12} />
				<Heading color={'#fff'} fontSize={'48px'} fontWeight={'600'} >Thank You!</Heading>
				
			</Stack>
		</ProjectModal>
	);
};
