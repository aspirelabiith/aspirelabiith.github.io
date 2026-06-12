import { Publication } from "../lib/types";

const publications: Array<Publication> = [
  {
    id: "hybrid-drone-quadruped-deployment-2026",
    authors: "Aashish Sahu, B. V. Harshavardhan, and R. Prasanth Kumar",
    title:
      "Autonomous aerial deployment of a hybrid drone-quadruped system for environmental tasks",
    venue:
      "Proceedings of the Institution of Mechanical Engineers, Part C: Journal of Mechanical Engineering Science, 2026",
    award: "",
    abstract:
      "This paper presents a novel aerial-ground robotic system that integrates a hexacopter UAV with a vibration-isolated quadruped robot for autonomous deployment, environmental interaction, and delivery of objects in unstructured terrains. We introduce a unique charpai-inspired spring-thread suspension platform. This passive system effectively attenuates aerial vibrations during flight, enabling stable in-flight transport of a 12-DOF quadruped. The robot employs a front-mounted, ant-inspired 2-DOF gripper and a ROS2-based control stack for vision-guided navigation and inertial stabilization. Unlike prior UAV-UGV platforms, our system enables active mid-air balancing, terrain-aware deployment, and autonomous object manipulation, validated in complex outdoor environments. Theoretical modeling and experimental validation reveal over 85% vibration isolation efficiency, with field trials confirming robust performance in complex outdoor environments. This work establishes a scalable and robust hybrid framework enabling autonomous monitoring, disaster response, and autonomous precision delivery in challenging terrains.",
    doi: "10.1177/09544062261454017",
  },
  {
    id: "multi-sensor-fusion-uav-gps-denied-2026",
    authors:
      "VVS Viswa Kiran, Akkala Sainath Reddy, H. Vishal Sri Sai, Himabindu Allaka, and R. Prasanth Kumar",
    title:
      "A Multi-Sensor Fusion Framework for Unmanned Aerial Vehicle (UAV) Navigation and Inspection in GPS-Denied and Degraded Environments",
    venue:
      "2026 IEEE Applied Sensing Conference (APSCON), Delhi, India, 23-25 February 2026",
    award: "Best Poster Award",
    abstract:
      "Reliable autonomous navigation of Unmanned Aerial Vehicles (UAVs) in GPS-denied environments remains a significant challenge due to signal attenuation, spoofing, and jamming. Indoor environments such as warehouses and industrial facilities suffer from GPS degradation caused by structural occlusions, while outdoor scenarios including forests and flat terrains lack reliable localization cues. To address these challenges, this paper presents a multi-sensor fusion framework for robust UAV navigation in GPS-compromised environments. The proposed approach employs a dual-strategy navigation framework: (i) Visual Simultaneous Localization and Mapping (VSLAM) with 3D point cloud generation for structured indoor environments, and (ii) a VSLAM-based 2D digital twin representation for outdoor environments, integrating visual data with inertial and altitude measurements. Software-in-the-loop (SIL) simulations using ROS and RTAB-Map validate autonomous navigation with obstacle avoidance in warehouse scenarios, while Hardware-in-the-loop (HIL) experiments on an in-house developed UAV platform demonstrate accurate indoor mapping and localization. The results demonstrate that the proposed vision-centric framework enables reliable navigation without dependence on GPS, offering a scalable and resilient solution for UAV operations in GPS-denied environments, with applications in inventory management, surveillance, and search-and-rescue missions.",
    doi: "10.1109/apscon68325.2026.11497125",
  },
  {
    id: "two-agent-aerial-throw-catch-2026",
    authors: "Aashish Sahu and R. Prasanth Kumar",
    title:
      "Modeling and Control of a Two-Agent Aerial System for Dynamic Throw-and-Catch Maneuvers",
    venue:
      "2026 IEEE Applied Sensing Conference (APSCON), Delhi, India, 23-25 February 2026",
    award: "",
    abstract:
      "Cooperative multi-agent aerial systems are transforming aerial logistics and manipulation by enabling drones to perform dynamic physical interactions. This paper presents the complete modeling and control of a two-quadcopter system executing a high-speed throw-and-catch maneuver. A high-fidelity MATLAB simulation couples a throwing unmanned Aerial Vehicle (UAV) that launches a ballistic payload with a catching UAV that autonomously intercepts it. The main challenge lies in achieving reliable interception of a fast, unpowered projectile under severe dynamic and latency constraints. Conventional reactive-pursuit controllers, which continuously track the projectile, were found to be unstable and computationally infeasible. To overcome these limitations, a lightweight Predictive Intercept Controller (PIC) is proposed, which computes a single fixed spatio-temporal intercept point using the projectile's ballistic model and commands a tuned Proportional–Derivative (PD) controller to reach it. Monte Carlo evaluations demonstrate a 93.3% interception success rate across randomized launch conditions, with mean spatial and temporal errors below 0.12 m and 40 ms, respectively. The results confirm that the proposed predictive–feedback framework is robust, repeatable, and suitable for real-time implementation on embedded UAV platforms.",
    doi: "10.1109/apscon68325.2026.11496796",
  },
  {
    id: "semantic-mapping-lidar-rgb-2026",
    authors:
      "Sarimella Rami Reddy, VVS Viswa Kiran, Siddapu Chinnikrishna Yadav, and R Prasanth Kumar",
    title:
      "Real-Time Semantic Mapping and Object-Oriented Autonomous Navigation with Low-Cost LiDAR and RGB Sensor",
    venue: "2026 IEEE Applied Sensing Conference (APSCON), Delhi, India, 2026",
    award: "",
    abstract:
      "This paper presents a framework for semantic mapping and autonomous navigation using low-cost LiDAR and RGB cameras. Our approach integrates real-time object detection from camera images with LiDAR-based mapping to generate a semantically enriched map, where detected objects are represented as landmarks with labels and images. The semantic map is then leveraged by the ROS2 Navigation2 (Nav2) stack to enable goal-directed autonomous navigation, allowing the robot to plan paths not only around obstacles but also toward specific objects of interest. The proposed method provides a low-cost, scalable, and practical solution for intelligent robot navigation in environments with visually identifiable objects.",
    doi: "10.1109/apscon68325.2026.11497028",
  },
  {
    id: "obstacle-crossing-underactuated-biped-2026",
    authors: "Krishnendu Roy and R Prasanth Kumar",
    title:
      "Obstacle crossing in revolute and prismatic knee underactuated biped robots",
    venue: "Robotics and Autonomous Systems, Volume 198, April 2026, 105340",
    award: "",
    abstract:
      "Obstacle crossing is an important ability in biped and humanoid robots that are designed to traverse unstructured terrain. We consider the problem of determining the maximum (a) height, (b) width, (c) cross-sectional area, (d) thin vertical barrier height, and (e) square area of the obstacle that an underactuated biped robot with point-feet can cross while walking slowly. Two different biped robot configurations are compared for obstacle crossing: revolute knee and prismatic knee. The path needed to overcome the obstacle without touching it is determined with the help of binary occupancy grid in the sagittal plane and using genetic algorithm based maximization for each of the five cases, considering thin links as well as thick links for the biped robots. The determined collision free path for obstacle crossing is implemented as a trajectory and demonstrated in dynamic simulation in Mujoco simulation environment. In order to control the position of zero moment point (ZMP) and the ground projection of center of mass for stability, a reaction wheel in the torso is utilized. It is observed that increasing the thicknesses of the biped robot links in general has an effect of reducing the maximum size of the obstacle that can be crossed. Further, prismatic knee biped robot performs better than revolute knee biped robot in crossing large obstacles, especially with thick links. Experiments on a prismatic-knee biped robot further validate the results of GA and MuJoCo simulations.",
    doi: "10.1016/j.robot.2026.105340",
  },
  {
    id: "collaborative-payload-transport-2025",
    authors:
      "N Shyam Sridhar, Aashish Sahu, S Rami Reddy, and R Prasanth Kumar",
    title:
      "Collaborative Payload Transport using a Four-Quadcopter Swarm with RTK and MQTT-based Coordination",
    venue:
      "2025 International Conference on Robotics and Mechatronics (ICRM), 2025",
    award: "Best Paper Award",
    abstract:
      "This paper presents the design and experimental validation of a collaborative payload transport system using a swarm of four quadcopters in an outdoor environment. The system employs a leader-follower framework where the leader drone generates mission commands and trajectory setpoints, which are disseminated to follower drones using MQTT over a Wi-Fi mesh. High-precision positioning is enabled via a Real-Time Kinematic (RTK) GNSS system, with RTCM correction data routed through a cloud server and broadcasted within the swarm using telemetry radios. Each quadcopter is equipped with PX4 Autopilot and a Raspberry Pi Zero 2 W for mission control and inter-agent communication. The system successfully demonstrates stable transport of a 1 kg payload, maintaining formation during ascent, directional maneuvers, and descent. This work serves as a scalable platform for multi-agent cooperative aerial manipulation in GPS-available outdoor settings.",
    doi: "10.1109/ICRM66809.2025.11349069",
  },
  {
    id: "hybrid-biped-rl-2025",
    authors: "Krishnendu Roy and R. Prasanth Kumar",
    title:
      "Prismatic-Revolute Hybrid Biped Robot Walking in Unstructured Terrain Using Reinforcement Learning",
    venue:
      "2025 International Conference on Robotics and Mechatronics (ICRM), 2025",
    award: "",
    abstract:
      "Abstract—This paper presents a reinforcement learning (RL) framework for controlling a planar bipedal robot with nine degrees of freedom (DOF), incorporating prismatic joints in both the shank and thigh segments. The inclusion of prismatic knee and thigh joints allows the robot to dynamically adjust its leg length during locomotion, significantly enhancing adaptability to uneven terrain and improving walking stability. The control architecture is implemented within a custom Gymnasium environment, leveraging the MuJoCo physics engine for high-fidelity simulation of the robot’s dynamics, contact interactions, and frictional effects. The RL policy is trained using state-of-the-art algorithms, with observation inputs comprising joint positions and velocities, ground reaction forces, and friction estimates. Simulation results demonstrate that the bipedal robot can successfully navigate uneven terrain without falling throughout the evaluated episode length, while ensuring all joint torque commands remain within the specified actuator limits.",
    doi: "10.1109/ICRM66809.2025.11349020",
  },
  {
    id: "dynamic-standing-stability-2025",
    authors: "Krishnendu Roy and R Prasanth Kumar",
    title:
      "Dynamic standing stability comparison of revolute-knee and prismatic-knee underactuated biped robots",
    venue:
      "International Journal of Dynamics and Control, Vol. 13, art No. 415, 2025",
    award: "",
    abstract:
      "Prismatic-knee biped robots have recently been considered an alternative to revolute-knee biped robots. In this study, we investigate control and stabilization strategies for a three-link biped robot with point feet, actuated at the hip and knee joints, making it an underactuated system. Two architectural configurations are considered: (i) a model with a prismatic knee joint, and (ii) a model with a conventional revolute knee joint. The investigation aims to evaluate and compare how these two knee designs affect the robot’s ability to achieve dynamic stability, especially when subjected to diverse disturbances or non-equilibrium initial configurations. For both the biped robot variants, the work space of the hip joint is systematically sampled to generate a set of disparate initial conditions. These scenarios reflect practical situations where the robot may encounter substantial deviations from its standing equilibrium-such as after a push, slip, or terrain irregularity. The control policy is trained using the Soft Actor-Critic (SAC) algorithm in a custom Gymnasium environment built with the MuJoCo simulator using default frictional values. The observation space includes ground reaction forces, joint velocities, joint positions, inertia matrix, center of mass velocities.",
    doi: "10.1007/s40435-025-01934-w",
  },
  {
    id: "unicycle-rider-vibration-2025",
    authors: "Sibivivek K. P., R. Prasanth Kumar, and Ashok Kumar Pandey",
    title:
      "Ride Comfort Analysis and Biodynamic Response of Unicycle Rider Under Whole Body Vibrations",
    venue:
      "ASME 2025 International Mechanical Engineering Congress and Exposition - India, V005T10A039, December 3, 2025",
    award: "",
    abstract:
      "Personalized vehicles have gained significant popularity in urban environments due to their simplicity and convenience. Among these, unicycles are emerging as one of the preferred choice for short-distance travel. However, the unique dynamics of unicycles present challenges related to ride comfort and safety, particularly when they are exposed to vibrations from uneven road surfaces. Understanding the biodynamic responses of riders under such conditions is critical for optimizing the unicycle design and ensuring compliance with vibration exposure standards. This study investigates the biodynamic responses of a unicycle rider subjected to whole-body vibrations across various road surfaces. The human body is modelled as a lumped parameter system with 13 degrees of freedom (DOF), where the unicycle is modelled analogous to a quarter-car system. The equations of motion were derived using the Euler-Lagrange method, and the biodynamic responses were evaluated in accordance with the ISO 5982-2001 standard. Key metrics such as Foot-to-Head Transmissibility (FTHT), Driving Point Mechanical Impedance (DPMI), and Apparent Mass (AM) are derived and computed to evaluate the vibration behaviour of the system. In addition, the road surfaces were modelled following the ISO 8606 standard, and the effects were incorporated into the rider-system dynamics. The peak acceleration values for individual body segments were analyzed for different road conditions, highlighting the pelvis and thighs as the segments experiencing the highest vertical vibration transmission. In addition, the primary response of the system was observed at approximately 9-10 Hz, which can be attributed to the vibration modes of the thigh and pelvic pitches.",
    doi: "10.1115/imece-india2025-159881",
  },
  {
    id: "arm-leg-hybrid-drone-2024",
    authors: "Aashish Sahu and R Prasanth Kumar",
    title:
      "Design and Development of an Arm-Leg Hybrid Drone for Enhanced Aerial Manipulation and Mobility",
    venue:
      "2024 IEEE International Conference on Robotics and Biomimetics (ROBIO), 2024",
    award: "",
    abstract:
      "This paper presents the design and development of an aerial manipulator utilizing a hybrid arm-leg system for enhanced aerial manipulation and mobility. The objective is to investigate the feasibility of utilizing a 4-degree-of-freedom (4DOF) hybrid manipulator consisting of two 2-DOF arms to maintain stable drone hovering while performing grasping tasks. The experiments were conducted for the effectiveness of the proposed method in achieving stable flight with objects, ensuring the avoidance of object loss or dropping. The integration of arms and legs in the hybrid manipulator provides increased versatility and adaptability, enabling agile and precise grasping tasks in challenging environments. Prospective developments could involve refining control algorithms and investigating novel materials and designs to enhance the manipulator's precision, efficacy, and overall functionality.",
    doi: "10.1109/ROBIO64047.2024.10907576",
  },
  {
    id: "hexacopter-suction-2024",
    authors: "Aashish Sahu and R Prasanth Kumar",
    title:
      "Design and Implementation of Hexacopter Drone with Integrated Suction and Lift Mechanism with Real-Time Depth Sensing for Precision Object Handling",
    venue:
      "2024 9th International Conference on Robotics and Automation Engineering (ICRAE), 2024",
    award: "",
    abstract:
      "This paper presents the design and implementation of an advanced hexacopter drone equipped with a novel suction and lift mechanism for precise object handling. The drone incorporates a dual-motor suction system affixed to a rotatable servo-controlled platform, enabling a 180-degree range of motion for accurate object placement. Integrated with a real-time camera system, the drone performs depth sensing, object detection, and size estimation, ensuring efficient and accurate operations. The control algorithm enables the drone to approach a target, lower the lift mechanism, and suction the object. Upon successful acquisition, the drone transports the object to a designated drop-off point, where it gently releases it. This versatile system is capable of handling various objects, including flat plates, small papers, and cylindrical items. The comprehensive functionality of this drone makes it a significant contribution to aerial robotics, with potential applications in logistics, warehousing, and precision delivery systems.",
    doi: "10.1109/ICRAE64368.2024.10851574",
  },
  {
    id: "prismatic-knee-rl-2023",
    authors: "Krishnendu Roy, R Prasanth Kumar, and P Murali Krishna",
    title: "Walking of Prismatic Knee Biped Robot Using Reinforcement Learning",
    venue:
      "2023 IEEE 4th Annual Flagship India Council International Subsections Conference (INDISCON), 2023",
    award: "Best Paper Award",
    abstract:
      "This paper presents the RL framework for walking of a 6DOF planar bipedal robot with a prismatic knee joint. The prismatic knee joint allows the robot to adapt to varying terrain and maintain stability during dynamic movements. The design is based on a two-legged walking model, where each leg has a prismatic knee joint and two other joints: hip and ankle are revolute. The control we use is Reinforcement Learning based system that utilizes an Open AI Gym MuJoCo environment and stable-baselines-3 as a tool to train the Biped model. The friction, ground reaction forces, velocity and position are considered as observation space for neural network input. The robot was tested for walking on the plane floor and its performance was compared to that of a conventional bipedal robot with an articulated joint biped. The results showed that the biped with a prismatic knee joint achieved greater stability.",
    doi: "10.1109/INDISCON58499.2023.10270269",
  },
  {
    id: "ga-trajectory-optimization-2023",
    authors: "Krishna Prakash Yadav and R Prasanth Kumar",
    title:
      "Genetic Algorithm-Based Trajectory Optimization for a Three-Link Biped Robot",
    venue:
      "2023 IEEE 4th Annual Flagship India Council International Subsections Conference (INDISCON), 2023",
    award: "",
    abstract:
      "This article presents the limit-cycle walking of a three-link biped robot consisting of a torso, two knee-locked legs, and point feet. The robot has three degrees of freedom, with its actuated hip joints and unactuated toe joints. The study proposes a PD feedback controller based on trajectory optimization, which is derived mathematically from Lyapunov analysis. The controller parameters are optimized using a genetic algorithm. The paper also tests the robustness of the model by applying external disturbances and shows that the Proportional Derivative controller enhances the robot's robustness, even in the presence of significant external disturbances.",
    doi: "10.1109/INDISCON58499.2023.10270427",
  },
  {
    id: "biped-underactuated-gait-2022",
    authors: "Krishna Prakash Yadav and R. Prasanth Kumar",
    title:
      "Biped dynamic walker modeling and control for underactuated gait cycle",
    venue:
      "International Journal of Dynamics and Control, Vol. 10, No. 4, pp. 1138-1147, 2022",
    award: "",
    abstract:
      "A biped dynamic walker with two legs and two feet capable of walking in double support phase and allowing starting the gait cycle from rest position is proposed. The walker is actuated at the ankle joints alone with no hip actuator, fully actuated in double support phase, and unactuated in single support phase. Assuming a static configuration at the start of each single support phase, fixed point information for the gait cycle at various step lengths is extracted and represented with four parameters of a cubic polynomial. This is used as the end configuration for the position controller’s reference target in the double support phase. Actuation at the ankles considers the unilateral constraints at the front and rear feet. Even with trajectory tracking controller, low cost of transport is achieved by ensuring no negative power inputs during actuation. A proportional feedback controller is employed for cycle convergence, and the stability of gait cycles, disturbance handling, and energetic efficiency for various step lengths is shown through simulations.",
    doi: "10.1007/s40435-021-00884-3",
  },
  {
    id: "5r-quadruped-design-2021",
    authors: "Mangesh D. Ratolikar and R. Prasanth Kumar",
    title:
      "Optimized design of 5R planar parallel mechanism aimed at gait-cycle of quadruped robots",
    venue: "Journal of Vibroengineering, Vol. 24, No. 1, pp. 104-115, 2021",
    award: "",
    abstract:
      "In quadruped robot locomotion using parallel mechanisms, researchers have used equal link lengths as legs for walking. However, force requirements are not the same in the forward and return strokes. An unsymmetrical parallel mechanism can be considered to accommodate such requirements. This work presents optimized dimensions of a 5R planar parallel mechanism (5R-PPM) with two degrees of freedom (DoF). Optimized dimensions are determined by formulating an optimization problem using kinematics and dynamics equations for the 5R-PPM. Genetic algorithm is considered to obtain solutions for the optimization problem formulated in this study. The constraint condition expressed here for optimization will attempt to minimize the peak torque essential to displace the links in the mechanism for the given height of the robot body and the path to be traced by the end-effector. After analysing all the four possible working modes for the same end-effector movement, the best working mode is selected for the quadruped legs. The equations are formulated and solved in MATLAB, and validated in the MATLAB Simscape Multibody toolbox.",
    doi: "10.21595/jve.2021.22131",
  },
  {
    id: "discrete-feedback-control-2021",
    authors: "Krishna Prakash Yadav and R. Prasanth Kumar",
    title:
      "Discrete Feedback Control for Robust Walking of Biped Dynamic Walker",
    venue:
      "2021 9th International Conference on Control, Mechatronics and Automation (ICCMA), 2021",
    award: "",
    abstract:
      "This paper presents a robust biped dynamic walker based on the virtual slope, which introduces the driving force in the walking direction. Virtual passive dynamic walker as a reference model is used to develop the feedback controller based on the relation between the step length and the virtual slope of the walker. A numerical solution is prescribed to obtain the local and global stability of the biped dynamic walker. The Poincare map and the basin of attraction plots have been used for stability analysis. A fifth-order curve fitting polynomial function is used to set the relation between step length and slope. A proportional feedback controller is used to correct the error at the transition state.",
    doi: "10.1109/ICCMA54375.2021.9646191",
  },
  {
    id: "pendulum-cart-rl-2021",
    authors: "A. P. Hima Vamsi, Mangesh D. Ratolikar, and R. Prasanth Kumar",
    title:
      "Swinging Up and Balancing a Pendulum on a Vertically Moving Cart Using Reinforcement Learning",
    venue:
      "2021 IEEE International Conference on Robotics and Biomimetics (ROBIO), 2021",
    award: "",
    abstract:
      "Underactuated systems occur frequently in robotics and legged locomotion. Unactuated pendulum on an actuated cart is a classic example used for designing and testing control algorithms for underactuated systems. While pendulum balancing on a horizontally moving cart is popular and environments available for reinforcement learning, pendulum on vertically moving cart is rarely discussed due to relatively higher difficulty level in balancing it. This paper presents a model environment for a pendulum on a vertically moving cart and trains a neural network controller using reinforcement learning to balance it in vertical position indefinitely without exceeding the displacement limits. Results presented for both con-tinuous and discrete force control input for the cart system show that the neural network controllers can successfully swing up and balance the pendulum.",
    doi: "10.1109/ROBIO54168.2021.9739602",
  },
  {
    id: "nn-inverted-pendulum-2021",
    authors: "Mangesh D. Ratolikar and R. Prasanth Kumar",
    title:
      "Neural network control of an inverted pendulum on a two DoF cart moving in the vertical plane",
    venue:
      "2021 6th International Conference on Robotics and Automation Engineering (ICRAE), 2021",
    award: "",
    abstract:
      "Inverted pendulum control finds similarities with control of legged robots such as bipedal or humanoid robots where the trunk is balanced in an upright position. This paper proposes and presents a two degree of freedom cart that can move in the vertical plane while holding an underactuated pendulum. A neural network controller is trained using reinforcement learning to swing up and balance the pendulum by applying appropriate forces along horizontal and vertical directions. Simulation results show successful swinging up and balancing of the underactuated pendulum by applying horizontal and vertical forces on the cart while simultaneously keeping the cart within horizontal and vertical limits on displacements.",
    doi: "10.1109/ICRAE53653.2021.9657762",
  },
  {
    id: "5r-parallel-leg-2020",
    authors: "Mangesh D. Ratolikar and R. Prasanth Kumar",
    title: "Optimal 5R parallel leg design for quadruped robot gait cycle",
    venue: "Vibroengineering PROCEDIA, Vol. 35, pp. 94-98, November 2020",
    award: "",
    abstract:
      "This paper presents the design of optimal dimensions for a two degrees of freedom parallel mechanism used in quadruped for walking application. Serial linkages or open link mechanisms have less stiffness and poor dynamic performance, thus parallel mechanisms were developed. Many researchers have used symmetrical parallel leg for quadruped walking but force requirements are different in forward and return stroke, thus unsymmetrical parallel leg may be optimal. Using genetic algorithm, optimum link length values are obtained and the corresponding peak torque is also found.",
    doi: "10.21595/vp.2020.21806",
  },
  {
    id: "biped-alternate-powered-2020",
    authors: "Krishna Prakash Yadav and R. Prasanth Kumar",
    title:
      "Biped dynamic walker with alternate unpowered and partially powered steps in a gait cycle",
    venue: "Vibroengineering PROCEDIA, Vol. 35, pp. 27-32, November 2020",
    award: "",
    abstract:
      "The biped dynamic walker considered in this paper has three actuators - two at the ankle joints and one at the hip joint. We consider the case of one of the two ankle actuators at fault. Despite having only two actuators operational, we show that successful gait is possible for a typical case of virtual passive dynamic walking. We analyze such gaits for local and global stability for a virtual slope and for the cases of completely unpowered or partially powered alternate steps. It is shown that completely unpowered alternate steps are preferred over partially powered alternate steps in the case of virtual passive dynamic walking for global stability, and the other way for local stability.",
    doi: "10.21595/vp.2020.21805",
  },
  {
    id: "realtime-trajectory-ditch-2019",
    authors: "V. Janardhan and R. Prasanth Kumar",
    title:
      "Generating real-time trajectories for a planar biped robot crossing a wide ditch with landing uncertainties",
    venue: "Robotica, Vol. 37, No. 1, pp. 109-140, January 2019",
    award: "",
    abstract:
      "Ditch crossing is one of the essential capabilities required for a biped robot in disaster management and search and rescue operations. Present work focuses on crossing a wide ditch with landing uncertainties by an under-actuated planar biped robot with five degrees of freedom. We consider a ditch as wide for a robot when the ankle to ankle stretch required to cross it is at least equal to the leg length of the robot. Since locomotion in uncertain environments requires real-time planning, in this paper, we present a new approach for generating real-time joint trajectories using control constraints not explicitly dependent on time, considering impact, dynamic balance, and friction. As part of the approach, we introduce a novel concept called the point of feasibility for bringing the biped robot to complete rest at the end of ditch crossing. We present a study on the influence of initial posture on landing impact and net energy consumption. Through simulations, we found the best initial postures to efficiently cross a wide ditch of width 1.05 m, with less impact and without singularities. Finally, we demonstrate the advantage of the proposed approach to cross a wide ditch when the surface friction is not same on both sides of the ditch.",
    doi: "10.1017/S0263574718000887",
  },
  {
    id: "biped-vertical-jumping-2018",
    authors: "A. Sripada, V. Janardhan, and R. Prasanth Kumar",
    title: "Biped Robot Vertical Jumping with Control Constraints",
    venue:
      "2018 IEEE International Conference on Robotics and Biomimetics (ROBIO), pp. 1683-1687, 2018",
    award: "",
    abstract:
      "This paper proposes a multibody dynamics approach to achieve vertical jumping motion in biped robots. Joint trajectories were generated using control constraints that depend on the vertical distance traveled by the Center of Mass (CoM) of the biped. For the stance phase, constraints are introduced on the vertical motion of CoM and on the Zero Moment Point (ZMP). ZMP was considered to be at the ankle and the ankle torque was made zero, so that foot angular momentum could be ignored. Constraints in the flight phase are considered such that the CoM moves in a vertical direction. Dynamic analysis of the biped was performed for stance and flight phases and joint angles and velocities were computed. Thus acquired angles and velocities were supplied to a 3DOFsingie leg robot, which jumped vertically to a height of 4cm.",
    doi: "10.1109/ROBIO.2018.8665223",
  },
  {
    id: "online-trajectory-ditch-2017",
    authors: "V. Janardhan and R. Prasanth Kumar",
    title:
      "Online trajectory generation for wide ditch crossing of biped robots using control constraints",
    venue: "Robotics and Autonomous Systems, Vol. 97, pp. 61-82, November 2017",
    award: "",
    abstract:
      "This work proposes a multibody dynamics approach to generate joint trajectories for a five degrees of freedom biped robot crossing a wide ditch whose width is greater than or equal to the robot’s leg length. Trajectories are generated using control constraints that depend on the horizontal distance traveled by the center of mass and are not explicitly dependent on time. Behavior of the biped robot for various initial postures is studied considering dynamic balance, friction, and impact in order to find the preferred initial postures considering the net energy consumption and peak power requirements at various joints. Several cases of friction, zero moment point location, and the center of mass height variation are considered in the study. Using the proposed approach, feasible trajectories for an adult sized biped robot could be generated for a wide ditch of 1.05 m width at coefficients of friction as low as 0.2. The results obtained are useful for designing reference trajectories and actuation systems for biped robots that need to cross wide ditches or take large steps. Time needed for trajectory generation is found to be sufficiently low for online implementation.",
    doi: "10.1016/j.robot.2017.07.014",
  },
  {
    id: "feasible-solutions-ditch-2017",
    authors: "V. Janardhan and R. Prasanth Kumar",
    title:
      "Generating Feasible Solutions for Dynamically Crossing a Wide Ditch by a Biped Robot",
    venue:
      "Journal of Intelligent & Robotic Systems, Vol. 88, No. 1, pp. 37-56, October 2017",
    award: "",
    abstract:
      "The aim of this research work is to generate feasible motion for a biped robot to dynamically cross a wide ditch which is defined as a ditch with width more than or equal to the leg length. We propose an approach to obtain feasible solutions for dynamically crossing the wide ditch considering the dynamic balance of the biped robot, friction between the robot foot and ground, impact on the foot, limitations on the joint actuator torques and angular velocities. The biped robot is modeled as a seven link planar robot with the ditch crossing task consisting of two single support phases and a double support phase. An algorithm is developed to find the joint trajectories and the joint torques in each phase of ditch crossing by formulating the ditch crossing task as a constrained nonlinear optimization problem. In order to make the algorithm converge fast and to give feasible solutions, additional constraints called Adopted Constraints (ACs) are incorporated into the system of constraints. With time being one of the parameters, the developed algorithm adaptively adjusts the time for crossing a wide ditch. The significance of ground reaction force constraints in obtaining feasible solutions for crossing the wide ditch is shown through simulations. Feasible solutions obtained from simulation results provide not only the feasible joint angle trajectories, but also the joint torques required for the selection of actuators for a biped robot crossing the wide ditch.",
    doi: "10.1007/s10846-017-0550-5",
  },
];

export { publications };
