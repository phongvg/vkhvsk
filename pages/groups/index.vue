<script setup lang="ts">
import { groupPerformance } from '@/data/dashboard/dashboardData';
</script>
<template>
    <v-card elevation="10" class="">
        <v-card-item class="pa-6">
            <v-card-title class="text-h5 pt-sm-2 pb-7">Danh sách người dùng</v-card-title>
            <v-table class="month-table">
                <thead>
                    <tr>
                        <th class="text-subtitle-1 font-weight-bold">STT</th>
                        <th class="text-subtitle-1 font-weight-bold">Tên Nhóm</th>
                        <th class="text-subtitle-1 font-weight-bold">Trạng Thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in groupPerformance" :key="item.name" class="month-item">
                        <td>
                            <p class="text-15 font-weight-medium">{{ item.id }}</p>
                        </td>
                        <td>
                            <div class="">
                                <h6 class="text-subtitle-1 font-weight-bold">{{ item.name }}</h6>
                            </div>
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
