
const duolingo_username = process.env.DUOLINGO_USERNAME ?? "";
const duolingo_user_id = process.env.DUOLINGO_USER_ID ?? "";
const duolingo_token = process.env.DUOLINGO_TOKEN ?? "";

export const getDuoLingoData = async () => {
	return fetch(`https://www.duolingo.com/2017-06-30/users?username=${duolingo_username}`, {
		headers: {
			// Set the Authorization header with the access token
			Authorization: `Bearer ${duolingo_token}`,
		},
	});
};

export const getAchievements = async () => {
	return fetch(`https://duolingo-achievements-prod.duolingo.com/users/${duolingo_user_id}/achievements?fromLanguage=en&hasPlus=1&isAgeRestricted=0&isProfilePublic=1&isSchools=0&learningLanguage=es&_=1741269681818`, {
		headers: {
			// Set the Authorization header with the access token
			Authorization: `Bearer ${duolingo_token}`,
		},
	});
}

export const getXpSummary = async () => {
	return fetch(`https://www.duolingo.com/2017-06-30/users/${duolingo_user_id}/xp_summaries?startDate=2024-03-06&_=1741270811949`, {
		headers: {
			// Set the Authorization header with the access token
			Authorization: `Bearer ${duolingo_token}`,
		},
	});
}

export const getMistakes = async () => {
	return fetch(`https://www.duolingo.com/v2/mistakes/users/${duolingo_user_id}/courses/DUOLINGO_ES_EN?includeListening=true&includeSpeaking=true&requestType=INBOX`, {
		headers: {
			// Set the Authorization header with the access token
			Authorization: `Bearer ${duolingo_token}`,
		},
	});
}

export const getGoalMilestones = async () => {
	return fetch(`https://goals-api.duolingo.com/users/${duolingo_user_id}/progress?timezone=America%2FNew_York&ui_language=en&_=1741270811951`, {
		headers: {
			// Set the Authorization header with the access token
			Authorization: `Bearer ${duolingo_token}`,
		},
	});
}


// achievements https://duolingo-achievements-prod.duolingo.com/users/11775069/achievements?fromLanguage=en&hasPlus=1&isAgeRestricted=0&isProfilePublic=1&isSchools=0&learningLanguage=es&_=1741269681818

// xp summary: https://www.duolingo.com/2017-06-30/users/11775069/xp_summaries?startDate=2024-03-06&_=1741270811949

// overall data: https://www.duolingo.com/2017-06-30/users/11775069?fields=acquisitionSurveyReason,adsConfig,animationEnabled,betaStatus,blockedUserIds,blockerUserIds,canUseModerationTools,classroomLeaderboardsEnabled,courses,creationDate,currentCourseId,email,emailAnnouncement,emailAssignment,emailAssignmentComplete,emailClassroomJoin,emailClassroomLeave,emailEditSuggested,emailEventsDigest,emailFollow,emailPass,emailPromotion,emailResearch,emailWeeklyProgressReport,emailSchoolsAnnouncement,emailSchoolsNewsletter,emailSchoolsProductUpdate,emailSchoolsPromotion,emailStreamPost,emailVerified,emailWeeklyReport,enableMicrophone,enableSoundEffects,enableSpeaker,experiments%7Baxl_web_lily_slow_clap,minfra_web_stripe_setup_intent,path_web_course_complete_slides,path_web_sections_overview,path_web_smec,placeholder_experiment,retention_web_streak_goal_at_milestones,spack_web_fp_upgrade_hook_v2,web_desquintify_tap_tokens%7D,facebookId,fromLanguage,gemsConfig,globalAmbassadorStatus,googleId,hasFacebookId,hasGoogleId,hasPlus,health,id,inviteURL,joinedClassroomIds,lastResurrectionTimestamp,learningLanguage,location,name,observedClassroomIds,optionalFeatures,persistentNotifications,picture,plusDiscounts,practiceReminderSettings,privacySettings,referralInfo,rewardBundles,roles,sessionCount,shouldPreventMonetizationForSchoolsUser,streak,streakData%7BcurrentStreak,longestStreak,previousStreak%7D,timezone,timezoneOffset,totalXp,trackingProperties,username,webNotificationIds,xpGains,xpGoal,zhTw,currentCourse&_=1741270810872

// mistakes: https://www.duolingo.com/v2/mistakes/users/11775069/courses/DUOLINGO_ES_EN?includeListening=true&includeSpeaking=true&requestType=INBOX&_=1741270810973

// progress (monthly badges): https://goals-api.duolingo.com/users/11775069/progress?timezone=America%2FNew_York&ui_language=en&_=1741270811951
// monthly goals: https://goals-api.duolingo.com/schema?ui_language=en&_=1741270811951