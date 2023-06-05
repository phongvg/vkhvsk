<script setup lang="ts">
import { productPerformance } from '@/data/dashboard/dashboardData';
</script>
<template>
    <v-card elevation="10" class="">
        <v-card-item class="pa-6">
            <v-card-title class="text-h5 pt-sm-2 pb-7">Danh sách người dùng</v-card-title>
            <v-table class="month-table">
                <thead>
                    <tr>
                        <th class="text-subtitle-1 font-weight-bold">STT</th>
                        <th class="text-subtitle-1 font-weight-bold">Họ và tên</th>
                        <th class="text-subtitle-1 font-weight-bold">Nhóm Quyền</th>
                        <th class="text-subtitle-1 font-weight-bold">Trạng thái</th>
                        <th class="text-subtitle-1 font-weight-bold text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in productPerformance" :key="item.name" class="month-item">
                        <td>
                            <p class="text-15 font-weight-medium">{{ item.id }}</p>
                        </td>
                        <td>
                            <div class="">
                                <h6 class="text-subtitle-1 font-weight-bold">{{ item.name }}</h6>
                                <div class="text-13 mt-1 text-muted">{{ item.email }}</div>
                            </div>
                        </td>
                        <td>
                            <h6 class="text-body-1 text-muted">{{ item.group }}</h6>
                        </td>
                        <td>
                            <v-chip :class="'text-body-1 bg-' + item.statuscolor" color="white" size="small">{{
                                item.status
                            }}</v-chip>
                        </td>
                        <td>
                            <v-row align="center" justify="center">
                                <v-col cols="auto">
                                    <v-btn icon="mdi-eye" size="small"></v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn icon="mdi-pencil" size="small"></v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn icon="mdi-delete" size="small"></v-btn>
                                </v-col>
                            </v-row>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-item>
    </v-card>
</template>
