import { UserSession } from '@novu/testing';
import { IUpdateNotificationTemplateDto } from '@novu/shared';
import axios from 'axios';

import { UpdateSubscriberOnlineFlagRequestDto } from '../../dtos/update-subscriber-online-flag-request.dto';
import { UpdateSubscriberPreferenceRequestDto } from '../../../widgets/dtos/update-subscriber-preference-request.dto';

const axiosInstance = axios.create();

export async function getNotificationTemplate(session: UserSession, id: string) {
  return await axiosInstance.get(`${session.serverUrl}/v1/notification-templates/${id}`, {
    headers: {
      authorization: `ApiKey ${session.apiKey}`,
    },
  });
}

export async function updateNotificationTemplate(
  session: UserSession,
  id: string,
  data: IUpdateNotificationTemplateDto
) {
  return await axiosInstance.put(`${session.serverUrl}/v1/notification-templates/${id}`, data, {
    headers: {
      authorization: `ApiKey ${session.apiKey}`,
    },
  });
}

export async function getPreference(session: UserSession) {
  return await axiosInstance.get(`${session.serverUrl}/v1/subscribers/${session.subscriberId}/preferences`, {
    headers: {
      authorization: `ApiKey ${session.apiKey}`,
    },
  });
}

export async function updateSubscriberOnlineFlag(
  data: UpdateSubscriberOnlineFlagRequestDto,
  session: UserSession,
  subscriberId: string
) {
  return await axiosInstance.patch(`${session.serverUrl}/v1/subscribers/${subscriberId}/online-status`, data, {
    headers: {
      authorization: `ApiKey ${session.apiKey}`,
    },
  });
}

export async function updatePreference(
  data: UpdateSubscriberPreferenceRequestDto,
  session: UserSession,
  templateId: string
) {
  return await axiosInstance.patch(
    `${session.serverUrl}/v1/subscribers/${session.subscriberId}/preferences/${templateId}`,
    data,
    {
      headers: {
        authorization: `ApiKey ${session.apiKey}`,
      },
    }
  );
}
