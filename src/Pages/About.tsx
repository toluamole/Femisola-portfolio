import { Stack, Text, Image, VStack, SimpleGrid, Heading } from '@chakra-ui/react';
import React from 'react';
import { AboutJumbotron } from '../Components/AboutJumbotron';
import { LandingPageLayout } from '../Layouts/LandingPageLayout';
import Star from '../Assets/Images/Star.svg';
import { Gallery } from '../Components/Gallery';

const AboutText = [
	{
		id: 0,
		text: 'First of all, thanks for finding me interesting enough to want to read all this. I can understand.'
	},
	{
		id: 1,
		text: 'Right now, I am interested in creating products that have a lasting positive impact on society. I&apos;m someone that enjoys speaking to people, knowing the problems they face,and eventually providing solutions that solve those problems. '
	},
	{
		id: 2,
		text: 'Of course, I don&apos;t do that through design alone, come on! I also sing, do a bit of romantic counseling for my friends who are head over heels, and I can be quite funny at times. Trust me.'
	},
	{
		id: 3,
		text: 'If you are still reading this at this point, then I might have to give you a hug or something.'
	},
	{
		id: 4,
		text: 'I love playing video games, and by games I mean (FIFA), I can&apos;t seem to enjoy something else.'
	},
	{
		id: 5,
		text: 'That should be all for now. Enjoy a couple of images of me and some random things below. Cheers and I do hope you have a fantastic day/night 😊'
	}
];

export const About = () => {
	return(
		<LandingPageLayout JumbotronSection={<AboutJumbotron/>}>
			<Stack
				pb={'240px'}
			>
				<Heading
					color={'#fff'}
					fontSize={['20px','32px']}
					fontWeight={500}
					pt={10} pb={'100px'}
					lineHeight={'8'}
					position={'relative'}
					bottom={'65px'}
				>Let’s get serious! or not<br/> (insert whatever smiley emoji<br/> you prefer)</Heading>
				<SimpleGrid
					columns={[1,2]}
					justifyContent={'space-between'}
					// py={20}
				>
					<Image src={Star} w={'100px'} h={'100px'} alignSelf={'flex-end'} />
					<VStack
						justify={'baseline'}
						align={'baseline'}
					>
						{AboutText.map((item) => {
							return(
								<Text
									color={'#fff'}
									fontSize={'24px'}
									fontWeight={'400'}
									pb={6}
									key={item.id}
								>
									{item.text}
								</Text>
							);
						})}
					</VStack>	
				</SimpleGrid>
			</Stack>
			<Gallery/>
		</LandingPageLayout>
	);
};